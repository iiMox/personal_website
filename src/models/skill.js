const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
    {
        skill: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            min: 0,
            max: 100,
        },
        image: {
            type: Buffer,
            required: true,
        },
    },
    { timestamps: true }
);

const skill = new mongoose.Model("Skill", skillSchema);

module.exports = skill;
