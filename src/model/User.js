
const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  Todo: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  Email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }, 
},
{timestamps: true}
);

const todoModel = model("todo", todoSchema);

module.exports = todoModel;
