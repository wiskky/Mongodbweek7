
const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  Date: {
    type: Date
  }
  
});

const userModel = model("todo", todoSchema);

module.exports = userModel;
