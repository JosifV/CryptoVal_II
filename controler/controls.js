const rp = require("request-promise");
const { CoinHistSchema } = require("../db/models");

module.exports = {
  getData: (req, res) => {
    const id = req.params.id;

    const requestOptions = {
      method: "GET",
      uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
      qs: {
        id
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COIN_KEY
      },
      json: true,
      gzip: true
    };

    rp(requestOptions)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  getHistoricalData: (req, res) => {
    const id = req.params.id;

    const requestOptions = {
      method: "GET",
      uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
      qs: {
        id
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COIN_KEY
      },
      json: true,
      gzip: true
    };

    rp(requestOptions)
      .then(response => {
        const rootResp = response.data[id];
        const placeholderPrice = parseInt(
          rootResp.quote.USD.price + (Math.floor(Math.random() * 100) - 50)
        );
        res.send(String(placeholderPrice));
      })
      .catch(err => {
        res.send("Try again");
      });
  },
  saveToDb: (req, res, next) => {
    const title = req.params.title;
    const arrToSave = req.body.histArr;
    console.log(arrToSave); //* check if true

    CoinHistSchema.create({})
      .then(resp => {
        resp.push({
          histTitle: title,
          histArr: arrToSave
        });
        res("Info saved to Database");
      })
      .catch(next);
  }
};
