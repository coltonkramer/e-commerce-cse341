const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getDataUsers = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("climbing-shoes-commerce")
    .collection("users")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

module.exports = { 
    getDataUsers
};
