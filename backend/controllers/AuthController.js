import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import User from "../models/User.js";

export const register = async (req, res) => {
  // hassing password
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created user",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not found. Please create Account",
      });
    } else {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!checkPassword) {
        res.status(401).json({
          success: false,
          message: "Incorrect Password!",
        });
      } else {
        const { password, role, ...rest } = user;

        const token = jwt.sign(
          {
            id: user._id,
            role: user.role,
          },
          process.env.JWT_SECRET_KEY
        );
        //set token in the browser cookies and send the response to the client
        res.cookie("accessToken", token, {
          // path: "/",
          httpOnly: true,
        });

        res.status(200).json({
          token,
          data: { ...rest },
          role,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
