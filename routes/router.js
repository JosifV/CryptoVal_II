const controls = require("../controler/controls");

module.exports = app => {
  app.get("/data/:id", controls.getData);
  app.get("/historicalData/:id", controls.getHistoricalData);
  app.post("/saveToDb/:title", controls.saveToDb);
};
