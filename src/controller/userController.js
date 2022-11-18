const User = require("../model/User");


//create todo
exports.createTodo = async(req, res) => {
  try {
    let todo = await req.body;
    let created = await User.create(todo);
    if (!created)
      return res.status(400).json({
        success: false,
        message: 'Todo created failed',
        error: error.message
      });
    return res.status(200).json({
      success: true,
      message: 'Todo created successfully',
      user: created

    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });

  }
}

//get all todo'
exports.getAllTodo = async (req, res) => {
  try {
    let todo = await User.find();
    if (todo.length == 0)
      return res.status(404).json({
        success: false,
        message: "No todo is found",
        error: error.message
      });
    res.status(200).json({
      success: true,
      message: "Todo found"
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