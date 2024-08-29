const express = require("express");
const app = express();
const PORT = 3333;
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const URI = "mongodb://localhost:27017";
const client = new MongoClient(URI);
app.use(bodyParser.json());
app.use(cors());


const db = client.db("myDbs");
const collection = db.collection("products");

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.get("/products", async (req, res) => {
  try {
    const data = await collection.find({}).toArray();
    console.log(data)
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
});

app.post("/products", async (req, res) => {
  try {
    const data = req.body;
    const result = await collection.insertOne(data);
    res.json(result);
  } catch (error) {
    res.status(500).send("Error saving product");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
