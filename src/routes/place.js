const express = require("express");
const controller = require("../controllers/place");

const router = express.Router();

router.get("/:id", async (req, res) => {
    controller.getPlace(req, res);
})

router.get("/", async (req, res) => {
    controller.getAllPlaces(res);
})

router.post("/", async (req, res) => {
    controller.createPlace(req, res);
})

router.delete("/:id", async (req, res) => {
    controller.deletePlace(req, res);
    
})

module.exports = router;