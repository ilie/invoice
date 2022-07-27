require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const billRoutes = require("./routes/bills");
const clientRoutes = require('./routes/clients');

// Constants
const PORT = process.env.PORT;
const DB_URI = process.env.MONG_URI;

// Express app
const app = express();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/bills", billRoutes);
app.use("/api/clients", clientRoutes);

// Connect to DB
mongoose
  .connect(DB_URI)
  .then(() => {
    // Listen for requests
    app.listen(PORT, () => {
      console.log("connected to DB and listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
