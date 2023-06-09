const router = require("express").Router();
const Stages = require("../models/Stage.model");

// Require fileUploader
const fileUploader = require("../config/cloudinary.config");

// all your routes here

//create stages
router.get("/stages", async (req, res, next) => {
  try {
    const allStages = await Stages.find();
    res.render("stages/stages", { allStages });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/stages/create", (req, res, next) =>
  res.render("stages/new-stages")
);

router.post(
  "/stages/create",
  fileUploader.single("imageUrl"),
  async (req, res) => {
    try {
      const userId = req.session.currentUser._id;
      const { location, comments } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = req.file.path;
      }

      await Stages.create({ author: userId, location, comments, imageUrl });
      //console.log(createdStage);
      res.redirect("/stages");
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/stages", async (req, res, next) => {
  try {
    const allStages = await Stages.find();
    res.render("stages/stages", { allStages });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/stages/:id", async (req, res, next) => {
  const stagesId = req.params.id;
  try {
    const selectedStages = await Stages.findById(stagesId);
    res.render("stages/stages-details", selectedStages);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Update stages
router.get("/stages/edit/:id", async (req, res, next) => {
  const stagesId = req.params.id;
  try {
    const pickedStages = await Stages.findById(stagesId);
    res.render("stages/edit-stages", pickedStages);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/stages/edit/:id", async (req, res, next) => {
  const stagesId = req.params.id;
  const {  location, comments, } = req.body;
  try {
    const pickedStages = await Stages.findByIdAndUpdate(stagesId, {
      location,
      comments,
      
    });
    res.redirect(`/stages/${stagesId}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//delete stages
router.post("/stages/delete/:id", async (req, res, next) => {
  const stagesId = req.params.id;
  try {
    await Stages.findByIdAndRemove(stagesId);
    res.redirect("/stages");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
