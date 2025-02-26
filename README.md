Behamics Node.js Tasks

A REST API built with Node.js, Express.js, and MongoDB to manage user authentication and car rentals.

Features
User Registration & Authentication
View Logged-in User Profile
List & Filter Available Rental Cars
Token-based Authentication

Technologies Used
Node.js - npm i node
Express.js - npm i express
MongoDB (MongoClient) - npm i mongodb
JWT (JSON Web Tokens) for authentication - npm i jsonwebtoken
Password Hashing (bcryptjs) - npm i bcryptjs
CORS Handling - npm i cors
Environment Variables - npm i dotenv

API Endpoints & Testing with Postman

1. Register a New User
   Endpoint: POST http://localhost:8000/api/register

Request Body:
{
"fullName": "Bleonaa Zeqiri",
"email": "bleonaa@gmail.com",
"username": "Bleonaa",
"password": "bleonaa"
}
Response:
{
"message": "User registered successfully"
}

2. User Login
   Endpoint: POST http://localhost:8000/api/login

Request Body:
{
"username": "Bleonaa",
"password": "bleonaa"
}

Response:
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JmNjI5YjljZDFlZTQ4MGU3YjhlZjEiLCJ1c2VybmFtZSI6IkJsZW9uYWEiLCJpYXQiOjE3NDA1OTU5MTQsImV4cCI6MTc0MDU5OTUxNH0.EJA3185d96bwTqarCSFQGQUt4twDtN9ah7KclTw_PFo"
}

3. Get Logged-in User Profile (Authenticated)
   Endpoint: GET http://localhost:8000/api/my-profile

Response:
{
"\_id": "67bf629b9cd1ee480e7b8ef1",
"fullName": "Bleonaa Zeqiri",
"email": "bleonaa@gmail.com",
"username": "Bleonaa"
}

4. Get All Rental Cars (Sorted by Price)
   Endpoint: GET http://localhost:8000/api/rental-cars

Response:
[
{
"_id": "67be5e01d10d21c7326a19f2",
"name": "Golf mk8",
"price_per_day": 50,
"year": 2015,
"color": "black",
"steering_type": "automatic",
"number_of_seats": 5
},
{
"_id": "67be67d6d10d21c7326a1a02",
"name": "Audi A4",
"price_per_day": 60,
"year": 2017,
"color": "red",
"steering_type": "manual",
"number_of_seats": 4
}
] 5. Get Rental Cars with Filters (Example: Black Cars from 2015)
Endpoint: GET http://localhost:8000/api/rental-cars?color=black&year=2015

Response:
[
{
"_id": "67be5e01d10d21c7326a19f2",
"name": "Golf mk8",
"price_per_day": 50,
"year": 2015,
"color": "black",
"steering_type": "automatic",
"number_of_seats": 5
}
]

Setup & Installation
git clone https://github.com/BleonaZeqiri/NodeJS-Tasks.git
npm install
nodemon rent.js
npm run devStart
