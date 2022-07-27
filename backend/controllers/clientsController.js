const Client = require("../models/Client");
const db = require("mongoose");

// Get all bills
const getClients = async (req, res) => {
  const clients = await Client.find({}).sort({ createdAt: -1 });
  res.status(200).json(clients);
};

// Get single client
const getClient = async (req, res) => {
  const { id } = req.params;
  if (!db.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Resource not found" });

  const client = await Client.findById(id);
  if (!client) return res.status(404).json({ error: "Resource not found" });

  res.status(200).json(client);
};

// Create new client
const createClient = async (req, res) => {
  const { name, address, nif, email } = req.body;

  try {
    const client = await Client.create({ name, address, nif, email });
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update client
const updateClient = async (req, res) => {
  const { id } = req.params;
  if (!db.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Resource not found" });

  const client = await Client.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!client) return res.status(404).json({ error: "Resource not found" });

  const uptatedClient = await Client.findById(id);
  res.status(200).json(uptatedClient);
};

// Delete client
const deleteClient = async (req, res) => {
  const { id } = req.params;
  if (!db.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Resource not found" });

  const client = await Client.findOneAndDelete({ _id: id });
  if (!client) return res.status(400).json({ error: "Resource not found" });

  res.status(204).json();
};
// Export functions
module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};
