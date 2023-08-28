import News from "../models/News.js";
import nodemailer from "nodemailer";

export const createNews = async (req, res) => {
  const { email } = req.body;
  // Initialize nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., Gmail, Outlook
    host: 'smtp.gmail.com',
    auth: {
      user: "vivekmashru01@gmail.com",
      pass: "iqyaslhfwvquypwa",
    },
  });

  const mailOptions = {
    from: "vivekmashru01@gmail.com",
    to: email,
    subject: "Welcome to our newsletter!",
    text: "Thank you for subscribing to our newsletter!",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Subscription successful");
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   message: "Failed to Create",
    // });
    console.error(err);
    res.status(500).send("Subscription failed");
  }
};
