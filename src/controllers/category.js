const category_service = require("../services/category")
const handleError = require("../middleware/errors");

async function getCategory(req, res) {
    try {
        const id = req.params.id;
        const query_result = await place_service.getCategory(id);
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}
async function getAllCategories(res) {
    try {
        const query_result = await place_service.getAllCategories();
        res.json(query_result);
    } catch (error) {
        handleError(error, res);
    }
}

async function getCategoryFromPlace(req, res) {
    try {
        const placeId = req.params.placeId;
        const query_result = await category_service.getCategoriesFromPlace(placeId);
        res.json(query_result);
    } catch (error) {
        handleError(error, res)
    }
}

async function getCategoryFromEvent(req, res) {
    try {
        const eventId = req.params.eventId;
        const query_result = await category_service.getCategoriesFromEvent(eventId);
        res.json(query_result);
    } catch (error) {
        handleError(error, res)
    }
}

async function addCategory(req, res) {
    try {

        const category_data = req.body;
        const query_result = await category_service.addCategory(category_data);
        res.json(query_result);
    }
    catch (error) {
        handleError(error, res);
    }   
}

async function deleteCategory(req, res){
    try {
        const id = req.params.id;
        const query_result = await category_service.deleteCategory(id);
        res.json(query_result);
        
    } catch (error) {
        handleError(error, res);
    }
}


module.exports ={getCategory, getAllCategories, getCategoryFromPlace, getCategoryFromEvent, addCategory, deleteCategory};