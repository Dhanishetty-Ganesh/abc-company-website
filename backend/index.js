const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = 'cmstasks';
const collectionName = 'headings';
let headingCollection;

client.connect().then(() => {
  const db = client.db(dbName);
  headingCollection = db.collection(collectionName);
  console.log(`MongoDB connected to ${dbName}`);
});

// GET API - fetch heading
app.get('/api/heading', async (req, res) => {
  const heading = await headingCollection.findOne({});
  res.json(heading || { text: "Default heading..." });
});

// POST API - save or update heading
app.post('/api/heading', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const existing = await headingCollection.findOne({});
  if (existing) {
    await headingCollection.updateOne({ _id: existing._id }, { $set: { text } });
    res.json({ message: "Heading updated" });
  } else {
    await headingCollection.insertOne({ text });
    res.json({ message: "Heading inserted" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
