const model = require("../models/category")
const idGenerator = require("../utils/generateID");

async function getCategory(id) {
    return await model.getCategory(id);
}

async function getCategoriesFromPlace(placeId) {
    return await model.getCategoriesFromPlace(placeId);
}

async function getCategoriesFromEvent(eventId) {
    return await model.getCategoriesFromPlace(eventId);
}

async function getAllCategories() {
    console.debug("in all category service")
    return await model.getAllCategories();
}

async function addCategory(res, category_data) {
    console.debug("in category service")
    const id = await idGenerator.generatePlaceId();
    console.debug("generated id");
    const placeId = category_data.placeId;
    const eventId = category_data.eventId;
    const category = category_data.category;
    console.log(eventId);

    /*if (placeId != null && eventId != null){
        console.log("cannot have a place and an event");
        const err = Error("cannot have a place and an event");
        return err;
    }
    if (placeId == null && eventId == null){
        const err = Error("need one place or one id");
        return err;
    }*/

    await model.addCategory(id, placeId, eventId, category);
    return await getCategory(id);
}

async function deleteCategory(id){
    const return_value = await getCategory(id);
    await model.deleteCategory(id);
    return return_value;
}

module.exports = {getCategory, getCategoriesFromPlace, getCategoriesFromEvent, getAllCategories, addCategory, deleteCategory};