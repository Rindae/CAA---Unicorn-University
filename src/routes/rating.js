const express = require("express");
const controller = require("../controllers/rating");

const router = express.Router();

router.get("/:id", async (req, res) => {
    controller.getRating(req, res);
})

router.get("/", async (req, res) => {
    controller.getAllRatings(res);
})

router.post("/", async (req, res) => {
    controller.createRating(req, res);
})

router.delete("/:id", async (req, res) => {
    controller.deleteRating(req, res);
})

module.exports = router;