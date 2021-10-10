const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { signInValidation, signUpValidation } = require("../public/validation");

router.get("/users", async (req, res) => {
  const users = await User.find({});

  const userMap = {};
  users.forEach((user) => {
    userMap[user._id] = user;
  });

  res.send(userMap);
});



router.post("/signup", async (req, res) => {
  const { error } = signUpValidation(req.body);

  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  const usernameExist = await User.findOne({ username: req.body.username });
  const emailExist = await User.findOne({ email: req.body.email });

  if (emailExist)
    return res.status(400).send({ message: "User already exist" });
  if (usernameExist)
    return res
      .status(400)
      .send({ message: "Username already used by someone" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User(req.body);

  try {
    const savedUser = await user.save();
    res.send({ user: savedUser });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

router.post("/signin", async (req, res) => {
  const { error } = signInValidation(req.body);

  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send({ message: "User doesn't exist" });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send({ message: "Invalid password" });

  res.send({ message: true, user: user });
});

module.exports = router;
