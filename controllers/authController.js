const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/db");

async function register(req, res) {
  const { fullName, email, username, password } = req.body;
  if (!fullName || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const db = await connectDB();
  const usersCollection = db.collection("users");

  const existingUser = await usersCollection.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({
    fullName,
    email,
    username,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User registered successfully" });
}

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const db = await connectDB();
  const usersCollection = db.collection("users");

  const user = await usersCollection.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
}

async function myProfile(req, res) {
  const db = await connectDB();
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne(
    { _id: new ObjectId(req.user.userId) },
    { projection: { password: 0 } }
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
}

module.exports = { register, login, myProfile };
