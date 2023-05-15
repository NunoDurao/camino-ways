const router = require("express").Router();
const Stages = require("../models/stages.model");

// all your routes here

//create stages

router.get("/stages/create", (req, res, next) =>
  res.render("stages/new-stages")
);

router.post("/stages/create", async (req, res, next) => {
  const { name, location, comments, uploadPhoto } = req.body;

  try {
    await Stages.create({ name, location, comments, uploadPhoto });
    res.redirect("/stages");
  } catch (error) {
    //render again this
    console.log(error);
    next(error);
  }
});

//see all celebs and celebs details

router.get("/", async (req, res, next) => {
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

//Update celebs
router.get("/stages/edit/:id", async (req, res, next) => {
  const stagesId = req.params.id;
  try {
    const pickedStages = await Stages.findById(StagesId);
    res.render("stages/edit-stages", pickedStages);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/stages/edit/:id", async (req, res, next) => {
  const stagesId = req.params.id;
  const { name, location, comments, uploadPhoto } = req.body;
  try {
    const pickedStages = await Stages.findByIdAndUpdate(stagesId, {
      name,
      location,
      comments,
      uploadPhoto,
    });
    res.redirect(`/stages/${stagesId}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//delete celebs
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
