const model = require("../models/place")
const idGenerator = require("../utils/generateID");

async function getPlace(id) {
    return await model.getPlace(id);
}

async function getAllPlaces() {
    return await model.getAllPlaces();
}

async function createPlace (place_data) {
    console.debug("in service")
    const id = await idGenerator.generatePlaceId();
    console.debug("generated id");
    const name = place_data.name;
    const description = place_data.description;
    const avgRating = place_data.avgRating;
    const price = place_data.price;
    console.debug(`price: ${price}`);
    await model.createPlace(id, name, description, avgRating, price);
    return await getPlace(id);
}

async function deletePlace(id){
    const return_value = await getPlace(id);
    await model.deletePlace(id);
    return return_value;
}

module.exports = {getPlace, getAllPlaces, createPlace, deletePlace};