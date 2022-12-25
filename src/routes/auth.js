const express = require("express");
<<<<<<< HEAD
=======
const bcrypt = require("bcrypt");
>>>>>>> f13e33ac533797b88d48c0103178fcdc941261df
const Admin = require("../models/admin");

const router = new express.Router();

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const user = await Admin.findOne({
        $or: [{ username }, { email }],
    });

    if (user) {
        return res
            .status(400)
            .json({ message: "Username or email already taken." });
    }

    const newAdmin = new Admin({
        username: username,
        email: email.toLowerCase(),
<<<<<<< HEAD
        password: password,
=======
        password: await bcrypt.hash(password, 8),
>>>>>>> f13e33ac533797b88d48c0103178fcdc941261df
    });

    await newAdmin.save();
    res.status(200).json({ msg: "Success" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const admin = await Admin.findByCredentials(username, password);

    if (!admin) {
        return res.status(404).json({ message: "Wrong Credentials." });
    }

    const token = await admin.generateAuthToken();

    res.status(200).json({ token, message: "Success" });
});

module.exports = router;
