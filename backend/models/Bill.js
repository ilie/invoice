const db = require("mongoose");
const billSchemaValidation = require("../schemas/bill");
const Schema = db.Schema;

const billSchema = new Schema(billSchemaValidation, { timestamps: true });
billSchema.pre("save", function (done) {
  if (this.isNew) {
    console.log("bill is new");
    done();
  } else {
    done();
  }
});

module.exports = db.model("Bill", billSchema);
