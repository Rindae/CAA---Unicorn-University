const Ajv = require("ajv");
const ajv = new Ajv();

// --- Schemas ---

const registerPlaceSchema = {
    type: "object",
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        avgRating: { type: 'float64'},
        price: { type: 'int'}
    },
    required: ['name', 'description', 'avgRating'],
    additionalProperties: false
};

const validatePlaceData = ajv.compile(registerPlaceSchema);

// --- Exports ---

module.exports = {validatePlaceData}