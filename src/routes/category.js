const express = require("express");
const controller = require("../controllers/category");

const router = express.Router();

router.get("/:id", async (req, res) => {
    controller.getCategory(req, res);
})

router.get("/", async (req, res) => {
    controller.getAllCategories(res);
})

router.get("/place/:id", async (req, res) => {
    controller.getCategoryFromPlace(req, res);
})

router.get("/event/:id", async (req, res) => {
    controller.getCategoryFromEvent(req, res);
})

router.post("/", async (req, res) => {
    controller.addCategory(req, res);
})

router.delete("/:id", async (req, res) => {
    controller.deleteCategory(req, res);
})

module.exports = router;