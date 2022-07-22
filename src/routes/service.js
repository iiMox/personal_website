const express = require("express");
const mongoose = require("mongoose");
const Service = require("../models/service");
const auth = require("../middlewares/auth");

const router = new express.Router();

router.post("/", auth, async (req, res) => {
    const newService = new Service({
        service: req.body.service,
        description: req.body.description,
        position: req.body.position,
        visibility: req.body.visibility,
        icon: req.body.icon,
    });

    try {
        await newService.save();
        res.status(201).send(newService);
    } catch (e) {
        res.status(400).send();
    }
});

router.get("/", async (req, res) => {
    try {
        const services = await Service.find();

        res.send(services);
    } catch (e) {
        res.status(400).send();
    }
});

router.put("/:id", auth, async (req, res) => {
    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = [
        "service",
        "description",
        "position",
        "visibility",
        "icon",
    ];

    const isValidOperation = updates.map((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const service = await Service.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidator: true,
        });

        if (!service) {
            res.status(404).send();
        }

        res.status(200).send(service);

        res.status(200).send(service);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const service = await Service.findByIdAndRemove(
            mongoose.Types.ObjectId(req.params.id)
        );

        if (!service) {
            res.status(404).send();
        }

        res.status(200).send(service);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;
