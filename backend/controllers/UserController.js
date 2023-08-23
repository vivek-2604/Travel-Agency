import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const newuser = new User(req.body);
    const saveduser = await newuser.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: saveduser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to Create",
    });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateduser = await User.findByIdAndUpdate(id, {
      $set: req.body,
    });

    res.status(200).json(
      {
        success: true,
        message: "Successfully Update",
        data: updateduser,
      },
      { new: true }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    return res.status(200).json({
      success: true,
      message: "Successfully load data",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAllUser = async (req, res) => {
  //pagination
  const page = parseInt(req.query.page);

  try {
    const users = await User.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: users.length,
      message: "Successfully load all data",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
