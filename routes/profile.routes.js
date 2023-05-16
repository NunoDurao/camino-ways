const router = require("express").Router();
const User = require("../models/User.model");

router.get("/profile", async (req, res) => {
  try {
    const currentUser = req.session.currentUser._id;
    const user = await User.findById(currentUser);
    res.render("profile.hbs", { user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
