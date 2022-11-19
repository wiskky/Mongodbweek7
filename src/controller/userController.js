const User = require("../model/User");


//create todo
exports.createTodo = async(req, res) => {
  try {
    let todo = await req.body;
    let created = await User.create(todo);
    if (!created)
      return res.status(400).json({
        success: false,
        message: 'Todo creation failed',
        error: error.message
      });
    return res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      todo: created

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
    if (todo.length === 0)
      return res.status(404).json({
        success: false,
        message: "No todo is found",
        error: error.message
      });
    return res.status(200).json({
      TodoCount: todo.length,
      success: true,
      message: "All todo's found",
      todo,
      TodoCount: todo.length,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: " Internal Server Error",
      error: error.message,
    });
  };
};

//get single todo
exports.getTodo = async (req, res) => {
  try{
    let id = {_id: req.params.id};
    let todo = await User.findOne({_id: id});
    if(!todo)
      return res.status(404).json({
        success: false,
        message: "Todo not found",
        error: error.message
      });
      return res.status(200).json({
        success: true,
        message: 'Todo is found',
        todo,
      });
  }catch(error){
    return res.status(500).json({
      success: false,
      message: " Internal Server Error",
    });
  }
}

//update todo
exports.updateTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id }
    let todo = await req.body
    let update = await User.findOneAndUpdate(id, todo, {new: true});

    if (!update) 
      return res.status(400).json({
        sucess: false,
        message: "Updated not successful"
    });
    return res.status(200).json({
      success: true,
      message: 'Todo updated successfull',
      todo: update,
    });
}catch(error){
  return res.status(500).json({
    success: false,
    message: " Internal Server Error",
  });
}
}

//delete todos
exports.deleteTodo = async(req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleted = await User.findOneAndDelete(id);
    if(!deleted)
    return res.status(400).json({
      success: false,
      message: "Todo not deleted"
    });
    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: " Internal Server Error"
    });
  }
}