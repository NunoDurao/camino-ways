//  Add your code here
const { Schema, model } = require("mongoose");

const stagesSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    location: {
      type: String,
      enum: [
        "Porto-Vairao",
        "Vairao-Barcelos",
        "Barcelos-Ponte de Lima",
        "Ponte de Lima-Rubiaes",
        "Rubiaes-Tui",
        "Tui-Mos",
        "Mos-Pontevedra",
        "Pontevedra-Caldas de Reis",
        "Caldas de Reis-Padron",
        "Padron-Santiago de Compostela",
      ],
    },
    comments: String,
    imageUrl: String,
  },

  {
    timestamps: true,
  }
);

const Stages = model("Stages", stagesSchema);

module.exports = Stages;
