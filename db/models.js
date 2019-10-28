const mongoose = require("mongoose");
const { Schema } = mongoose;

const basicStructure = {
  histTitle: String,
  histArr: Array
};
const BitCoinHist = new Schema(basicStructure, {
  timestamps: true
});
const BitCoinHistSchema = mongoose.model("bitcoinhist", BitCoinHist);

const EthereumHist = new Schema(basicStructure, {
  timestamps: true
});
const EthereumHistSchema = mongoose.model("ethereumhist", EthereumHist);

const SafexHist = new Schema(basicStructure, {
  timestamps: true
});
const SafexHistSchema = mongoose.model("safexhist", SafexHist);

const BlueCoinHist = new Schema(basicStructure, {
  timestamps: true
});
const BlueCoinHistSchema = mongoose.model("bluecoinhist", BlueCoinHist);
module.exports = {
  BitCoinHistSchema,
  EthereumHistSchema,
  SafexHistSchema,
  BlueCoinHistSchema
};
