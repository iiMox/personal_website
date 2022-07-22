const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middlewares/auth");
const Skill = require("../models/skill");

const router = new express.Router();

router.post("", auth, async (req, res) => {
    const newSkill = new Skill({
        skill: req.body.skill,
        position: req.body.position,
        visibility: req.body.visibility,
        icon: req.body.icon,
    });

    try {
        await newSkill.save();
        res.status(201).send(newSkill);
    } catch (e) {
        res.status(400).send();
    }
});

router.get("", async (req, res) => {
    try {
        const skills = await Skill.find();

        res.status(200).send(skills);
    } catch (e) {
        res.status(400).send();
    }
});

router.put("/:id", auth, async (req, res) => {
    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = ["skill", "position", "visibility", "icon"];

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send({ message: "Invalid updates!" });
    }

    try {
        const skill = await Skill.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidator: true,
        });

        if (!skill) {
            return res.status(400).send();
        }

        res.send(skill);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const skill = await Skill.findByIdAndRemove(
            mongoose.Types.ObjectId(req.params.id)
        );

        if (!skill) {
            return res.status(404).send();
        }

        res.send(skill);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;
