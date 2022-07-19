const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middlewares/auth");
const Project = require("../models/project");

const router = new express.Router();

router.post("/", auth, async (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        link: req.body.link,
        position: req.body.position,
        preview: req.body.preview,
    });

    try {
        await newProject.save();

        res.status(201).send(newProject);
    } catch (e) {
        res.status(400).send();
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).send(projects);
    } catch (e) {
        res.status(400).send();
    }
});

router.put("/:id", auth, async (req, res) => {
    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = ["title", "link", "position", "preview"];
    const isValidOperation = updates.map((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const project = await Project.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidator: true,
        });

        if (!project) {
            res.status(404).send();
        }

        res.status(200).send(project);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const project = await Project.findByIdAndRemove(
            mongoose.Types.ObjectId(req.params.id)
        );

        if (!project) {
            return res.status(404).send();
        }

        res.status(200).send(project);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;
