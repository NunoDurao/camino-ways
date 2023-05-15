//  Add your code here
const { Schema, model } = require("mongoose");

const stagesSchema = new Schema({
    name: String,
    location: String,
    comments: String,
    imageUrl: String,
},

    {
        timestamps: true
    });

const Stages = model("Stages", stagesSchema);

module.exports = Stages;