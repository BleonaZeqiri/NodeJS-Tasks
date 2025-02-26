const { connectDB } = require("../config/db");

async function getRentalCars(req, res) {
  const { year, color, steering_type, number_of_seats } = req.query;

  let query = {};
  if (year) query.year = parseInt(year);
  if (color) query.color = color;
  if (steering_type) query.steering_type = steering_type;
  if (number_of_seats) query.number_of_seats = parseInt(number_of_seats);

  const db = await connectDB();
  const carsCollection = db.collection("cars");

  const cars = await carsCollection
    .find(query)
    .sort({ price_per_day: 1 })
    .toArray();
  res.json(cars);
}

module.exports = { getRentalCars };
