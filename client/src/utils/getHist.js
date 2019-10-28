const axios = require("axios");

module.exports = async allIsSetHandler => {
  const url = `http://localhost:5000/showHistData`;

  const resp = await axios.get(url);

  let arrToReturn = [];
  for (const coin of resp.data) {
    if (coin) {
      const date = new Date(coin.createdAt).toDateString();
      let difInPrice = Number;
      let indicator = Boolean;
      const doItAll = (localNum, price, bool) => {
        difInPrice = parseFloat((100 * localNum) / price).toFixed(2);
        indicator = bool;
      };
      if (coin.histArr[0].lastPrice < coin.histArr[0].price) {
        let localNum = coin.histArr[0].price - coin.histArr[0].lastPrice;
        doItAll(localNum, coin.histArr[0].price, true);
      } else if (coin.histArr[0].lastPrice > coin.histArr[0].price) {
        let localNum = coin.histArr[0].lastPrice - coin.histArr[0].price;
        doItAll(localNum, coin.histArr[0].lastPrice, false);
      } else {
        difInPrice = 0.0;
        indicator = true;
      }
      arrToReturn.push({
        title: coin.histTitle,
        lastChecked: date,
        price: coin.histArr[0].price,
        priceDif: difInPrice,
        contextOfPrice: indicator
      });
    }
  }
  allIsSetHandler(true);

  return arrToReturn;
};
