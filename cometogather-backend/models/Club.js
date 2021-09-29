const mongoose = require("mongoose");
Schema = mongoose.Schema

const clubSchema = mongoose.Schema({
  name: {
    type: String,
    min: 6,
    required: true,
    max: 255,
  },
  description: {
    type: String,
    min: 10,
    required: false,
    max: 50,
  },
  star: {
    type: Number,
  },
  admin: {
    username: String,
    avatar: String,
  },
  members: [
    {
      username: String,
      avatar: String,
    },
  ],
  Image: {
    type: String, //This Schema should be mentioned as a string
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Club', clubSchema);