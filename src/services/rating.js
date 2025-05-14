const model = require("../models/rating")
const idGenerator = require("../utils/generateID");

async function getRating(id) {
    return await model.getRating(id);
}

async function getAllRatings() {
    return await model.getAllRatings();
}

async function createRating(rating_data) {
    console.debug("in service")
    const id = await idGenerator.generateRatingtId();
    console.debug("generated id");

    const username = rating_data.username;
    const placeId = rating_data.placeId;
    const rating = rating_data.rating;

    await model.createRating(id, placeId, username, rating);
    return await getRating(id);
}

async function deleteRating(id){
    const return_value = await getRating(id);
    await model.deleteRating(id);
    return return_value;
}

module.exports = {getRating, getAllRatings, createRating, deleteRating};