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
        allowedFormats: ["jpg", "png", "jpeg", "webp"],
    },
});

const upload = multer({ storage: storage });

const router = new express.Router();

router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (req.file && req.file.path) {
            const imageInfo = await cloudinary.api.resource(
                req.file.path.slice(
                    req.file.path.lastIndexOf("/") + 1,
                    req.file.path.lastIndexOf(".")
                )
            );
            console.log(imageInfo);
            return res.status(200).send(req.file.path);
        } else {
            res.status(422).send();
        }
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/:publicId", async (req, res) => {
    try {
        cloudinary.uploader.destroy(
            `PersonalWebsite/${req.params.publicId}`,
            async (error, result) => {
                if (error) {
                    return res.status(400).send(error);
                }
                res.status(200).send();
            }
        );
    } catch (e) {}
});

module.exports = router;
