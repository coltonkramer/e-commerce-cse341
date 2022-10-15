const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getDataProducts = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("climbing-shoes-commerce")
    .collection("products")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};
const getDataProductsById = async (req, res, next) => {
  const productId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("climbing-shoes-commerce")
    .collection("products")
    .find({ _id: productId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const createProductEntry = async (req, res) => {
  const newProduct = {
    sku: req.body.sku,
    name: req.body.name,
    color: req.body.color,
    price: req.body.price,
    img: req.body.img,
    manufacturer: req.body.manufacturer,
    size: req.body.size
  };
  const response = await mongodb.getDb().db("climbing-shoes-commerce").collection("products").insertOne(newProduct);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'We got an error here');
  }
}

const deleteProductEntry = async(req, res) => {
  const userId = new ObjectId(req.params.id);
  
  const response = await mongodb.getDb().db('climbing-shoes-commerce').collection('products').remove({ _id: userId }, true);
  
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'We got an error here');
  }
  
}

module.exports = { 
    getDataProducts,
    getDataProductsById,
    createProductEntry,
    deleteProductEntry
};