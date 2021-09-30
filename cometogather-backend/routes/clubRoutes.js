const router = require("express").Router();
var Club = require("../models/Club");

router.post("/", async function (req, res) {
  const clubExist = await Club.findOne({ name: req.body.name });

  if (clubExist) {
    return res.status(400).send({ message: "club already exists" });
  }

  const club = new Club({
    name: req.body.name,
    description: req.body.description,
    star: req.body.star,
    date: req.body.date,
  });

  try {
    const savedClub = await club.save();
    res.send({ club: savedClub });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

router.get("/", async function (req, res) {
  const clubs = await Club.find({});
  try {
    const clubsMap = {};
    clubs.forEach((club) => {
      clubsMap[club._id] = club;
    });

    res.status(400).send(clubsMap);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/addUser", async (req, res) => {
  const club = await Club.findOne({ name: req.body.name });

  if (club) {
    club.members.push({ username: req.body.username, avatar: req.body.avatar });
    const savedClub = await club.save();
    return res.status(400).send({ message: savedClub });
  }

  return res.status(400).send({ message: "club doesn't exist" });
});
module.exports = router;
