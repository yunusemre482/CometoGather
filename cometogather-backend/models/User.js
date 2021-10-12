const mongoose = require("mongoose");
const imageSchema =require('./Image').schema;
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    minlength: [
       2,
      "your first name could not be less than 2 characters!",
    ],
    maxlength: [
      25,
      "your first name could not be more than 25 characters!"
    ]
  },
  lastname: {
    type: String,
    trim: true,
    minlength: [
      2,
     "your last name could not be less than 2 characters!",
   ],
   maxlength: [
     25,
     "your last name could not be more than 25 characters!"
   ]
  },
  username: {
    type: String,
    unique: [true, "username has already been used!"],
    required: [true, "username is required!"],
    lowercase: true,
    trim: true,
    minlength: [
      2,
     "your user name could not be less than 2 characters!",
   ],
   maxlength: [
     35,
     "your user name could not be more than 25 characters!"
   ]
  },
  userType: {
    type: String,
    trim: true,
    lowercase: true,
    default: "user",
    enum: {
      values: ["user", "admin"],
      message: "each user can only be admin or user",
    },
  },
  image:[imageSchema],
  password: {
    type: String,
    required: [true, "please enter a password for your account"],
    select: false,
    minlength: [8, "your password could not be less than 8 characters"],
    maxlength: [64, "your password could not be more than 64 characters"],
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: [true, "this email has already been used!"],
  },
  phoneNumber: {
    type: String,
    unique: [true, "this phone number has already been used!"],
    minlength: [11, "phone numbers has the length of 11 characters!"],
    maxlength: [11, "phone numbers has the length of 11 characters!"],
  },
  gender: {
    type: String,
    required: [true, "gender field could not be empty!"],
    enum: {
      values: ["male", "female"],
      message: "you must be either male or female!",
    },
  },
  birthDate: {
    type: Date,
  },
});


module.exports = mongoose.model("User", userSchema);
