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
        position: {
            type: Number,
            min: 1,
            required: true,
        },
        visibility: {
            type: Boolean,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Service = new mongoose.model("Service", serviceSchema);

module.exports = Service;
