const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: Buffer,
            required: true,
        },
    },
    { timestamps: true }
);

const project = new mongoose.Model("Project", projectSchema);

module.exports = project;
