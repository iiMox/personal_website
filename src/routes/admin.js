const express = require("express");
const auth = require("../middlewares/auth");

const router = new express.Router();

router.use("/admins", auth, async (req, res) => {});

module.exports = router;
