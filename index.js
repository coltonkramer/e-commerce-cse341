const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");

const port = process.env.PORT || 8080;
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  console.log("3. In callback. Is there an error?", err);
  if (err) {
    console.log(err);
  } else {
    console.log("4. Starting to listen on port ", port);
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
