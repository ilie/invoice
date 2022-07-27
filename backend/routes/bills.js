const express = require("express");
const router = express.Router();
const {
  getBills,
  getBill,
  createBill,
  updateBill,
  deleteBill,
} = require("../controllers/billsController");

// GET all bils
router.get("/", getBills);

//GET one bill
router.get("/:id", getBill);

// Create one bill
router.post("/", createBill);

//DELETE one bill
router.delete("/:id", deleteBill);

//UPDATE one bill
router.patch("/:id", updateBill);


//--------------------//
module.exports = router;
