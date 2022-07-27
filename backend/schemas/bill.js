const billSchemaValidation = {
  invoiceNo: {
    type: Number
  },
  items: [{
    item: {
      type: String,
      default: '',
      trim: true,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    unitCost: {
      type: Number,
      required: true
    }
  }],
  vat: {
    type: Number,
    required: true,
  },
  irpf: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    enum: ['Paid', 'Unpaid'],
    default: 'Unpaid'
  }
};

module.exports = billSchemaValidation;
