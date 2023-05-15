//  Add your code here
const {Schema, model} = require("mongoose");

const stagesSchema = new Schema({
    name: String,
    occupation:{
        type: String,
        default: "Unknown",
    },
    catchPhrase: String
})

const Stages = model("Celeb", stagesSchema);

module.exports = Stages;