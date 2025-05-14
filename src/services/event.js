const model = require("../models/event")
const idGenerator = require("../utils/generateID");

async function getEvent(id) {
    return await model.getEvent(id);
}

async function getAllEvents() {
    return await model.getAllEvents();
}

async function createEvent(event_data) {
    console.debug("in service")
    const id = await idGenerator.generateEventId();
    console.debug("generated id");

    const name = event_data.name;
    const date = event_data.date;
    const district = event_data.district;
    const street = event_data.street;
    const number = event_data.number;
    const price = event_data.price;

    await model.createEvent(id, name, date, district, street, number, price);
    return await getEvent(id);
}

async function deleteEvent(id){
    const return_value = await getEvent(id);
    await model.deleteEvent(id);
    return return_value;
}

module.exports = {getEvent, getAllEvents, createEvent, deleteEvent};