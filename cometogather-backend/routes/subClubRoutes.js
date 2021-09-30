const router = require("express").Router();
var SubClub = require("../models/SubClub");


router.get("/", async function (req, res) {
    const subClub = await SubClub.find({});
    try {
      const subclubsMap = {};
      subClub.forEach((subclub) => {
        subclubsMap[club._id] = subclub;
      });
  
      res.status(400).send(subclubsMap);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
router.post("/", async function (req, res) {
  const subclubExist = await SubClub.findOne({ name: req.body.name });

  if (subclubExist) {
    return res.status(400).send({ message: "club already exists" });
  }

  const subclub = new SubClub({
    name: req.body.name,
    description: req.body.description,
    star: req.body.star,
    date: req.body.date,
  });

  try {
    const savedsubclub = await subclub.save();
    res.send({ subclub: savedsubclub });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});


router.post("/addUser", async (req, res) => {
  const subclub = await SubClub.findOne({ name: req.body.name });

  if (subclub) {
    subclub.members.push({ username: req.body.username, avatar: req.body.avatar });
    const savedsubclub = await subclub.save();
    return res.status(400).send({ message: savedsubclub });
  }

  return res.status(400).send({ message: "club doesn't exist" });
});
module.exports = router;
