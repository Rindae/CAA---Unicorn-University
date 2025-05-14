const place_service = require("../services/place")
const handleError = require("../middleware/errors")

async function getPlace(req, res) {
    try {
        const id = req.params.id;
        const query_result = await place_service.getPlace(id);
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}
async function getAllPlaces(res) {
    try {
        const query_result = await place_service.getAllPlaces();
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}

async function createPlace(req, res) {
    try {

        const place_data = req.body;
        const query_result = await place_service.createPlace(place_data);
        res.json(query_result);
    }
    catch (error) {
        handleError(error, res);
    }   
}

async function deletePlace (req, res){
    try {
        const id = req.params.id;
        const query_result = await place_service.deletePlace(id);
        res.json(query_result);
        
    } catch (error) {
        handleError(error, res);
    }
}


module.exports ={getPlace, getAllPlaces, createPlace, deletePlace};