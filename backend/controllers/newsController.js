import News from "../models/News.js";
import nodemailer from "nodemailer";

export const createNews = async (req, res) => {
  const { email } = req.body;

  // Validate email input
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address",
    });
  }

  try {
    // Save email to database
    const existingNews = await News.findOne({ email });
    if (existingNews) {
      return res.status(409).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    const newSubscriber = new News({ email });
    await newSubscriber.save();

    // Initialize nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 587, // Gmail SMTP port
      secure: false, // Use TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configure email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender email address
      to: email, // Recipient email address
      subject: "Welcome to our newsletter!",
      text: "Thank you for subscribing to our newsletter!",
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Subscription successful, welcome email sent",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to subscribe, please try again later",
    });
  }
};
