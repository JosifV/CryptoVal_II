const mongoose = require("mongoose");
const { Schema } = mongoose;

const CoinHist = new Schema({
  histTitle: String,
  histArr: Array
});
const CoinHistSchema = mongoose.model("coinhist", CoinHist);
module.exports = CoinHistSchema;
