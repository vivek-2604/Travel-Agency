import Booking from "./../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your Tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);

    res.status(200).json({ success: true, message: "successfull", data: book });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res
      .status(200)
      .json({ success: true, message: "successfull", data: books });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
