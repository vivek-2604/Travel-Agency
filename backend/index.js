import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/AuthRoutes.js";
import tourRoute from "./routes/TourRoutes.js";
import userRoute from "./routes/UserRoutes.js";
import reviewRoute from "./routes/reviewsRoute.js";
import bookingRoute from "./routes/bookigsRoutes.js";

import session from "express-session"

// const session = require('express-session');

dotenv.config();
const app = express();

const port = process.env.PORT || 8001;


//database Connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected");
  } catch (err) {
    console.log("Error:", err);
  }
};

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  secure: false,
  cookie: {
    maxAge: 3600000,
    httpOnly: true, 
  },
}));

const corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus : 200,
  credentials: true,
};
app.use(cors(corsOption));
app.use(cookieParser());

app.use(express.json());
app.use("/auth", authRoute);
app.use("/tours", tourRoute);
app.use("/users", userRoute);
app.use("/review", reviewRoute);
app.use("/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("Listen on:", port);
});
