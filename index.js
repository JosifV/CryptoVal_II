require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(cors());

const PORT = process.env.PORT || "5000";
const log = console.log;

mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true }, function(
  err
) {
  {
    if (err) {
      log("Some problem with the connection " + err);
    } else {
      log("The Mongoose connection is ready");
    }
  }
});
app.use(bodyParser.json());
routes(app);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  log(`App is listening on port ${PORT}`);
});
