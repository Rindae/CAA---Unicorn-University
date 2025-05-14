const DB = require("../database/index")

const db = DB.getDatabase();

async function getCategory(id) {
    return await db.query("SELECT * FROM Category WHERE ID = ?", [id]);
}

async function getCategoriesFromPlace(placeId) {
    return await db.query("SELECT * FROM Category WHERE placeId = ?", placeId)
}

async function getCategoriesFromEvent(eventId) {
    return await db.query("SELECT * FROM Category WHERE EventId = ?", eventId)
}

async function getAllCategories() {
    console.debug("in category model")
    return await db.query("SELECT * FROM Category")
}

async function addCategory(id, placeId, eventId, category){
    console.log("in category model");
    return await db.prepare("INSERT INTO PlaceCategory (id, placeId, eventId, category) \
                       VALUES (?, ?, ?, ?)", [id, placeId, eventId, category]);
}

async function deleteCategory(id) {
    return await db.prepare("DELETE FROM Category WHERE ID = ?", id);
}

module.exports = {getCategory, getCategoriesFromPlace, getCategoriesFromEvent, getAllCategories, addCategory, deleteCategory};