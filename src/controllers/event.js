const event_service = require("../services/event")
const handleError = require("../middleware/errors")

async function getEvent(req, res) {
    try {
        const id = req.params.id;
        const query_result = await event_service.getEvent(id);
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}
async function getAllEvents(res) {
    try {
        const query_result = await event_service.getAllEvents();
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}

async function createEvent(req, res) {
    try {

        const event_data = req.body;
        const query_result = await event_service.createEvent(event_data);
        res.json(query_result);
    }
    catch (error) {
        handleError(error, res);
    }   
}

async function deleteEvent(req, res){
    try {
        const id = req.params.id;
        const query_result = await event_service.deleteEvent(id);
        res.json(query_result);
        
    } catch (error) {
        handleError(error, res);
    }
}


module.exports ={getEvent, getAllEvents, createEvent, deleteEvent};