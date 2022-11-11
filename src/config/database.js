/* kindly install dotenv to avoid getting error
use npm i dotenv -D
*/

const mongoose = require('mongoose');
const {config} = require('dotenv');

config();

async function connect(uri) {
  try {
    /*mongoose.connect(uri || 'mongodb://localhost/27017'); b4 using below line*/
    mongoose.connect(uri || process.env.MONGO_DB_LOCAL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = connect

