const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
    {
        skill: {
            type: String,
            required: true,
        },
        position: {
            type: Number,
            required: true,
            min: 1,
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

const Skill = new mongoose.model("Skill", skillSchema);

module.exports = Skill;
