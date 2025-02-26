const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("carRental");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
}

module.exports = { connectDB, client };
