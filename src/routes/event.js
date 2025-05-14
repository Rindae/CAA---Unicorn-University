const express = require("express");
const controller = require("../controllers/event");

const router = express.Router();

router.get("/:id", async (req, res) => {
    controller.getEvent(req, res);
})

router.get("/", async (req, res) => {
    controller.getAllEvents(res);
})

router.post("/", async (req, res) => {
    controller.createEvent(req, res);
})

router.delete("/:id", async (req, res) => {
    controller.deleteEvent(req, res);
})

module.exports = router;