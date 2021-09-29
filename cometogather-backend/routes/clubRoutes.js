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

router.post("/addUser", function (req, res) {
  console.log(req.body);

  Club.findAndModify({
    _id:ObjectId("6151bf6916dfa6faff981d2a")
  },{
    $push :{ "members": {username: req.body.username,avatar:req.body.avatar} }
  });
  return res.status(400).send({ message: req.params.id });
});
module.exports = router;
