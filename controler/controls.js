const rp = require("request-promise");
const {
  BitCoinHistSchema,
  EthereumHistSchema,
  SafexHistSchema,
  BlueCoinHistSchema
} = require("../db/models");

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
  saveToDb: async (req, res) => {
    const title = req.params.title;
    const arrToSave = req.body.histArr;

    if (title === "Bitcoin") {
      const resp = await BitCoinHistSchema.create({
        histTitle: title,
        histArr: arrToSave
      });
      res.send(resp);
    } else if (title === "Ethereum") {
      const resp = await EthereumHistSchema.create({
        histTitle: title,
        histArr: arrToSave
      });
      res.send(resp);
    } else if (title === "Safex") {
      const resp = await SafexHistSchema.create({
        histTitle: title,
        histArr: arrToSave
      });
      res.send(resp);
    } else if (title === "BlueCoin") {
      const resp = await BlueCoinHistSchema.create({
        histTitle: title,
        histArr: arrToSave
      });
      res.send(resp);
    }
  },
  showHistData: async (req, res) => {
    const BitCoinHistResp = await BitCoinHistSchema.findOne(
      {},
      {},
      { sort: { created_at: -1 } }
    );
    const EthereumHistResp = await EthereumHistSchema.findOne(
      {},
      {},
      { sort: { created_at: -1 } }
    );
    const SafexHistResp = await SafexHistSchema.findOne(
      {},
      {},
      { sort: { created_at: -1 } }
    );
    const BlueCoinHistResp = await BlueCoinHistSchema.findOne(
      {},
      {},
      { sort: { created_at: -1 } }
    );

    let arrToReturn = [
      BitCoinHistResp,
      EthereumHistResp,
      SafexHistResp,
      BlueCoinHistResp
    ];
    res.send(arrToReturn);
  }
};
