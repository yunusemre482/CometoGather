var mongoose = require("mongoose");
Schema = mongoose.Schema;

const subClubSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  description: {
    type: String,
    required: false,
    min: 12,
    max: 90,
  },
  image: {
    type: String,
    required: false,
  },
  start: {
    type: Number,
    default: 0,
  },
  admin: {
    _id: String,
  },
  members: [
    {
      username: String,
      avatar: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SubClub', subClubSchema);