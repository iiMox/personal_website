const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middlewares/auth");
const Message = require("../models/message");

const router = new express.Router();

router.post("", async (req, res) => {
    const newMessage = new Message({
        sender: req.body.sender,
        email: req.body.email,
        subject: req.body.subject,
        content: req.body.content,
    });

    try {
        await newMessage.save();
        res.status(201).send(newMessage);
    } catch (e) {
        res.status(400).send();
    }
});

router.get("", auth, async (req, res) => {
    try {
        const messages = await Message.find();

        res.status(200).send(messages);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const message = await Message.findByIdAndRemove(
            mongoose.Types.ObjectId(req.params.id)
        );

        if (!message) {
            return res.status(404).send();
        }

        res.status(200).send(message);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;
