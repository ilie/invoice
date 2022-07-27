const Bill = require("../models/Bill");
const db = require("mongoose");

// Get all bills
const getBills = async (req, res) => {
  const bills = await Bill.find({}).sort({ createdAt: -1 });
  res.status(200).json(bills);
};

// Get single bill
const getBill = async (req, res) => {
  const { id } = req.params;
  if (!db.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Bill not found" });

  const bill = await Bill.findById(id);
  if (!bill) return res.status(404).json({ error: "Bill not found" });

  res.status(200).json(bill);
};

// Create new bill
const createBill = async (req, res) => {
  const { invoiceNo, items, vat, irpf, status } = req.body;

  try {
    const bill = await Bill.create({ invoiceNo, items, vat, irpf, status });
    res.status(200).json(bill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update bill
const updateBill = async (req, res) => {
  const { id } = req.params;
  if (!db.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Bill not found" });

  const bill = await Bill.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!bill) return res.status(404).json({ error: "Bill not found" });

  const updatedBill = await Bill.findById(id);
  res.status(200).json(updatedBill);
};

// Delete bill
const deleteBill = async (req, res) => {
  const { id } = req.params;
  if (!db.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Bill not found" });

  const bill = await Bill.findOneAndDelete({ _id: id });
  if (!bill) return res.status(400).json({ error: "Bill not found" });

  res.status(204).json();
};
// Export functions
module.exports = {
  getBills,
  getBill,
  createBill,
  updateBill,
  deleteBill,
};
