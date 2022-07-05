const express = require("express");
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
            .json({ msg: "Username or email already taken." });
    }

    const newAdmin = new Admin({
        username: username,
        email: email.toLowerCase(),
        password: password,
    });

    newAdmin.save();
    res.status(200).json({ msg: "Success" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const admin = await Admin.findByCredentials(username, password);

    if (!admin) {
        return res.status(400).json({ msg: "Wrong Credentials." });
    }

    const token = await admin.generateAuthToken();

    res.status(200).json({ token, msg: "Success" });
});

module.exports = router;
