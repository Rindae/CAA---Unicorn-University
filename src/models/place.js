const DB = require("../database/index")

const db = DB.getDatabase();

async function getPlace(id) {
    return await db.query("SELECT * FROM Place WHERE ID = ?", [id]);
}

async function getAllPlaces() {
    return await db.query("SELECT * FROM Place")
}

async function createPlace (id, name, description, avgRating, price){
    console.debug("in model")
    return await db.prepare("INSERT INTO Place (id, name, description, avgRating, price) \
                       VALUES (?, ?, ?, ?, ?)", [id, name, description, avgRating, price]);
}

async function deletePlace(id) {
    return await db.prepare("DELETE FROM Place WHERE id = ?", id);
}

async function updateAvg(placeId) {
    const ratings = await db.query("SELECT * FROM Rating WHERE placeId = ?", [placeId]);
    console.debug("all ratings:", ratings);

    if (ratings.length === 0) return;

    const total = ratings.reduce((sum, r) => sum + r.rating, 0);
    const avg = total / ratings.length;

    await db.prepare("UPDATE Place SET avgRating = ? WHERE id = ?", [avg, placeId]);
    return getPlace(placeId);
}

module.exports = {getPlace, getAllPlaces, createPlace, deletePlace, updateAvg};