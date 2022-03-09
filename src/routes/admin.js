const express = require("express");
const auth = require("../middlewares/auth");

const router = new express.Router();

router.post("/admins", async (req, res) => {});

module.exports = router;
