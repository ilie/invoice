const express = require("express");
const router = express.Router();
const {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientsController");

// GET all bils
router.get("/", getClients);

//GET one bill
router.get("/:id", getClient);

// Create one bill
router.post("/", createClient);

//DELETE one bill
router.delete("/:id", deleteClient);

//UPDATE one bill
router.patch("/:id", updateClient);


//--------------------//
module.exports = router;
