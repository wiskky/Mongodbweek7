
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
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
  age: {
    type: Number,
    default: null
  },
  isUser: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isUser: {
    type: Boolean,
    default: true
  },

},
  { timestamps: true }

);

const userModel = model("users", userSchema);

module.exports = userModel;
