const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors")
const app = express();


//to access from different origin
app.use(cors())

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection

const url = "mongodb://0.0.0.0:27017/";
const dbName = "PizzeriaDB";

mongoose
  .connect(url + dbName)
  .then(console.log("connected with MONGODB"))
  .catch((err) => {
    console.log("error connecting with db: ", err);
  });

// Define MongoDB schema and model
const pizzasSchema = new mongoose.Schema({
  id: String,
  type: String,
  price: Number,
  name: String,
  image: String,
  description: String,
  ingredients: Array,
  topping: Array,
});

const pizzas = mongoose.model("pizzas", pizzasSchema);




app.get("/pizzas", (req, res) => {
    pizzas
      .find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
      });
});

const ingredientsSchema = new mongoose.Schema({
  id: Number,
  tname: String,
  price: Number,
  image: String,
});

const ingredientsModel = mongoose.model("Ingredients", ingredientsSchema);
app.get("/ingredients", (req, res) => {
  ingredientsModel
    .find({})
    .then(function (ingredients) {
      res.json(ingredients);
    })
    .catch(function (err) {
      console.log(err);
    });
});

var cartSchema = new mongoose.Schema({
  id: String,
  type: String,
  price: Number,
  name: String,
  image: String,
  description: String,
  ingredients: Array,
  topping: Array,
});

const cart = mongoose.model("cart", cartSchema);

app.get("/cart", (req, res) => {
  cart
    .find({})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/cart", (req, res) => {
  const cartitem = req.body;
  cart
    .insertMany(cartitem)
    .catch(function (err) {
      console.log(err);
    });
});

app.delete("/cart/:id", (req, res) => {
  const pizzaId = req.params.id;

  cart
    .findOneAndDelete({ id: pizzaId })
    .then((deletedPizza) => {
      if (!deletedPizza) {
        res.status(404).json({ message: "Pizza not found in the cart" });
      } else {
        res.status(200).json({
          message: "Pizza deleted successfully from the cart",
          deletedPizza,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});




app.listen(7777, () => {
  console.log("Server is running at 7777 from server.js");
});
