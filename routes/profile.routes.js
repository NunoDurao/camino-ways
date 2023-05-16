const router = require("express").Router();
const User = require("../models/User.model");
const Stage = require("../models/Stage.model");

router.get("/profile", async (req, res) => {
  try {
    const currentUser = req.session.currentUser._id;
    const user = await User.findById(currentUser);

    const allStages = await Stage.find();

    const userStages = allStages.filter((stage) =>
      stage.author.equals(currentUser)
    );

    res.render("profile", { user, userStages });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
