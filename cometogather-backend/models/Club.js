const mongoose = require("mongoose");
Schema = mongoose.Schema;
const imageSchema = require('./Image').schema;
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
      id: {
        type: String,
        unique: true,
      },
    },
  ],
  subclubs: [
    {
      id: {
        type: String,
        unique: true,
      },
    },
  ],
  Image: [imageSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Club", clubSchema);
