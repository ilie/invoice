const clientSchemaValidation = {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nif: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
};

module.exports = clientSchemaValidation;