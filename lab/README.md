# Experiment 13 A: Express + Mongoose User Management Tutorial

## Objective
Learn MongoDB, Mongoose, and Express basics by building a simple user registration, login, and user-listing system[cite: 49].

## Theory & Key Concepts
- **Mongoose:** An ODM library for working with MongoDB in Node.js that provides schemas, models, validation, and query helpers[cite: 53].
- **Schema:** Defines document structure, field types, defaults (`createdAt`), and constraints such as `required` and `unique`[cite: 53, 56].
- **Model:** Created via `mongoose.model('User', userSchema)` to interact with the `users` collection in the `userdb` database[cite: 54, 71].
- **CRUD & Async/Await:** Uses asynchronous operations such as `.save()`, `.findOne()`, and `.find()`, along with duplicate-key error handling (`error.code === 11000`)[cite: 58, 60, 61, 66, 71].

## Setup & Execution
1. Install dependencies: `npm install express mongoose`[cite: 51]
2. Start MongoDB (`mongod`) or configure your MongoDB Atlas `DB_URL`[cite: 55, 62]
3. Run the server: `node server.js`[cite: 62]
4. Open `http://localhost:3000` in a browser to sign up, log in, and view registered users[cite: 63]
