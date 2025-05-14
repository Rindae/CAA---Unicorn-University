const AppError = require("./appError");
const { getDatabase } = require("../database/index")

let db = getDatabase();

async function generatePlaceId() {

    let uuid = crypto.randomUUID();
    while(await db.exists("Place","id",uuid)) {
        console.debug("Generated Place ID " + uuid + " conflicts with database, regenerating");
        uuid = crypto.randomUUID();
    }
    return uuid;
}
async function generateEventId() {

    let uuid = crypto.randomUUID();
    while(await db.exists("Event","id",uuid)) {
        console.debug("Generated Place ID " + uuid + " conflicts with database, regenerating");
        uuid = crypto.randomUUID();
    }
    return uuid;
}

async function generateRatingtId() {

    let uuid = crypto.randomUUID();
    while(await db.exists("Rating","id",uuid)) {
        console.debug("Generated Place ID " + uuid + " conflicts with database, regenerating");
        uuid = crypto.randomUUID();
    }
    return uuid;
}

async function generateCategoryId() {

    let uuid = crypto.randomUUID();
    while(await db.exists("Category","id",uuid)) {
        console.debug("Generated Category ID " + uuid + " conflicts with database, regenerating");
        uuid = crypto.randomUUID();
    }
    return uuid;
}

module.exports = {generatePlaceId, generateEventId, generateRatingtId, generateCategoryId};