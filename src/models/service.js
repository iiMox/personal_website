const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        service: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            typr: Buffer,
            required: true,
        },
    },
    { timestamps: true }
);

const service = new mongoose.Model("Service", serviceSchema);

module.exports = service;
