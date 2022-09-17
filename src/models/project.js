const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        position: {
            type: Number,
            min: 1,
            required: true,
            unique: true,
        },
        preview: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
