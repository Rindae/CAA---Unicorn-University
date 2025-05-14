const rating_service = require("../services/rating")
const handleError = require("../middleware/errors")

async function getRating(req, res) {
    try {
        const id = req.params.id;
        const query_result = await rating_service.getRating(id);
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}
async function getAllRatings(res) {
    try {
        const query_result = await rating_service.getAllRatings();
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}

async function createRating(req, res) {
    try {

        const rating_data = req.body;
        const query_result = await rating_service.createRating(rating_data);
        res.json(query_result);
    }
    catch (error) {
        handleError(error, res);
    }   
}

async function deleteRating(req, res){
    try {
        const id = req.params.id;
        const query_result = await rating_service.deleteRating(id);
        res.json(query_result);
        
    } catch (error) {
        handleError(error, res);
    }
}


module.exports ={getRating, getAllRatings, createRating, deleteRating};