//import mongoose from node modules
const mongoose = require("mongoose");
// create a schema for Player
const playerSchema = mongoose.Schema({
  name: String,
  equipe: String,
  dateOfBirth: String,
  image: String // path de l'image dans le serveur
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;
