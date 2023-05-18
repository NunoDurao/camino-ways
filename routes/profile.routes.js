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

    let portoVairao = [];
    let vairaoBarcelos = [];
    let barcelosPonteDeLima = [];
    let ponteDeLimaRubiaes = [];
    let rubiaesTui = [];
    let tuiMos = [];
    let mosPontevedra = [];
    let pontevedraCaldasDeRei = [];
    let caldasDeReiPadron = [];
    let padronSantiagoDeCompostela = [];

    for (let i = 0; i < userStages.length; i++) {
      if (userStages[i].location === "Porto-Vairao") {
        portoVairao.push(userStages[i]);
      } else if (userStages[i].location === "Vairao-Barcelos") {
        vairaoBarcelos.push(userStages[i]);
      } else if (userStages[i].location === "Barcelos-Ponte de Lima") {
        barcelosPonteDeLima.push(userStages[i]);
      } else if (userStages[i].location === "Ponte de Lima-Rubiaes") {
        ponteDeLimaRubiaes.push(userStages[i]);
      } else if (userStages[i].location === "Rubiaes-Tui") {
        rubiaesTui.push(userStages[i]);
      } else if (userStages[i].location === "Tui-Mos") {
        tuiMos.push(userStages[i]);
      } else if (userStages[i].location === "Mos-Pontevedra") {
        mosPontevedra.push(userStages[i]);
      } else if (userStages[i].location === "Pontevedra-Caldas de Rei") {
        pontevedraCaldasDeRei.push(userStages[i]);
      } else if (userStages[i].location === "Caldas de Rei-Padron") {
        caldasDeReiPadron.push(userStages[i]);
      } else if (userStages[i].location === "Padron-Santiago de Compostela") {
        padronSantiagoDeCompostela.push(userStages[i]);
      }
    } // <-- Move the closing bracket here

    res.render("profile", {
      user,
      userStages,
      portoVairao,
      vairaoBarcelos,
      barcelosPonteDeLima,
      ponteDeLimaRubiaes,
      rubiaesTui,
      tuiMos,
      mosPontevedra,
      pontevedraCaldasDeRei,
      caldasDeReiPadron,
      padronSantiagoDeCompostela,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
