
const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  Title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  Description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }, 
},
{timestamps: true}
);

const userModel = model("todo", todoSchema);

module.exports = userModel;
