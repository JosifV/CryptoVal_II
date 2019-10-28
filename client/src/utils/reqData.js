const marketCapRead = require("./marketCapRead");
const axios = require("axios");

module.exports = async (
  id,
  title,
  coinPriceSet,
  readTheNumSet,
  cmcSet,
  arrOfHistorySet,
  allIsSetHandler
) => {
  //* `/data/${id}`;
  const uri = `http://localhost:5000/data/${id}`;
  const uriHist = `http://localhost:5000/historicalData/${id}`;

  const uriSaveHist = `http://localhost:5000/saveToDb/${title}`;

  //* Current price
  let respData = await axios.get(uri);
  const rootResp = respData.data.data[id];
  coinPriceSet(parseInt(rootResp.quote.USD.price));

  //* Small info
  readTheNumSet(marketCapRead(parseInt(rootResp.quote.USD.market_cap)));
  cmcSet(rootResp.cmc_rank);

  //* 5 min ago
  let respDataHist5 = await axios.get(uriHist);

  //* 10 min ago
  let respDataHist10 = await axios.get(uriHist);

  //* 15 min ago
  let respDataHist15 = await axios.get(uriHist);

  //* 20 min ago
  let respDataHist20 = await axios.get(uriHist);

  //* 25 min ago
  let respDataHist25 = await axios.get(uriHist);

  //* 30 min ago
  let respDataHist30 = await axios.get(uriHist);

  //* 35 min ago
  let respDataHist35 = await axios.get(uriHist);

  const histArr = [
    { price: respDataHist5.data, lastPrice: respDataHist10.data },
    { price: respDataHist10.data, lastPrice: respDataHist15.data },
    { price: respDataHist15.data, lastPrice: respDataHist20.data },
    { price: respDataHist20.data, lastPrice: respDataHist25.data },
    { price: respDataHist25.data, lastPrice: respDataHist30.data },
    { price: respDataHist30.data, lastPrice: respDataHist35.data }
  ];
  arrOfHistorySet(histArr);
  axios.post(uriSaveHist, { histArr });

  allIsSetHandler(true);
};
