const db = require("mongoose");
const clientSchemaValidation = require("../schemas/client");
const Schema = db.Schema;

const clientSchema = new Schema(clientSchemaValidation, { timestamps: true });

module.exports = db.model("Client", clientSchema);
