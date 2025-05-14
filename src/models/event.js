const DB = require("../database/index")

const db = DB.getDatabase();

async function getEvent(id) {
    return await db.query("SELECT * FROM Event WHERE ID = ?", [id]);
}

async function getAllEvents() {
    return await db.query("SELECT * FROM Event")
}

async function createEvent(id, name, date, district, street, number, price){
    console.debug("in model")
    return await db.prepare("INSERT INTO Event (id, name, date, district, street, number, price) \
                       VALUES (?, ?, ?, ?, ?, ?, ?)", [id, name, date, district, street, number, price]);
}

async function deleteEvent(id) {
    return await db.prepare("DELETE FROM Event WHERE id = ?", id);
}

module.exports = {getEvent, getAllEvents, createEvent, deleteEvent};