const DB = require("../database/index")
const {updateAvg} = require("./place")

const db = DB.getDatabase();

async function getRating(id) {
    return await db.query("SELECT * FROM Rating WHERE ID = ?", [id]);
}

async function getAllRatings() {
    return await db.query("SELECT * FROM Rating")
}

async function createRating(id, placeId, username, rating){
    console.debug("in model")
    await db.prepare("INSERT INTO Rating (id, placeId, username, rating) \
                       VALUES (?, ?, ?, ?)", [id, placeId, username, rating]);
    updateAvg(placeId);
    return getRating(id);
}

async function deleteRating(id) {
    return await db.prepare("DELETE FROM Rating WHERE id = ?", id);
}

module.exports = {getRating, getAllRatings, createRating, deleteRating};