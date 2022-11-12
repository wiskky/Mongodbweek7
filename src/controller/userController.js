const User = require("../model/User");

//get all users'
exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (users.length == 0)
      return res.status(404).json({
        success: false,
        message: "No users were found"
      })
    res.status(200).json({
      success: true,
      message: "users found"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: " Internal Server Error",
      error: error.message,
    });
  };
};

//get single user

//update users

//delete users