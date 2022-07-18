const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "PersonalWebsite",
        allowedFormats: ["jpg", "png", "jpeg"],
    },
});

const upload = multer({ storage: storage });

const router = new express.Router();

router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (req.file && req.file.path) {
            return res.status(200).send(req.file.path);
        } else {
            res.status(422).send();
        }
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/", async (req, res) => {
    res.status(200).send();
});

module.exports = router;
