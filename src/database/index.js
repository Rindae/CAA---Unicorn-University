const SQLiteDatabase = require("./sqlite");
const { getConfig } = require("../utils/configManager")

let db;

async function connectDatabase() {

    const config = getConfig();

    db = new SQLiteDatabase(config.database);    
    await db.connect();
}

async function initDatabase() {

    if (db == null) {
        throw new Error("Database is not connected");
    }
    
    // Create Place table
    db.exec("CREATE TABLE IF NOT EXISTS Place ( \
            id TINYTEXT PRIMARY KEY, \
            name TEXT NOT NULL, \
            description TEXT NOT NULL, \
            avgRating REAL, \
            price INTEGER);");


    db.exec("CREATE TABLE IF NOT EXISTS Event ( \
        id TINYTEXT PRIMARY KEY, \
        name TEXT NOT NULL, \
        date TEXT NOT NULL, \
        district TEXT NOT NULL, \
        street TEXT NOT NULL, \
        number INTEGER DEFAULT 0, \
        price INTEGER);");

    db.exec("CREATE TABLE IF NOT EXISTS Rating ( \
        id TINYTEXT PRIMARY KEY, \
        placeId TINYTEXT, \
        username TEXT NOT NULL, \
        rating INTEGER);");
    
    db.exec("CREATE TABLE IF NOT EXISTS Category ( \
        id TINYTEXT PRIMARY KEY, \
        placeId TINYTEXT, \
        eventId TINYTEXT, \
        category TEXT NOT NULL);");
}

function getDatabase() {
    return db;
}




module.exports = { connectDatabase, initDatabase, getDatabase };