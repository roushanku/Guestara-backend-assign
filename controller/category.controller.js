import createCategoryService, { editCategoryService, getCategoryByNameService } from '../service/category.service.js';
import { getAllCategoryService } from '../service/category.service.js';
async function createCategoryController(req, res) {
    try{
        return createCategoryService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllCategoryController(req , res) {
    try{
        return getAllCategoryService(req , res);
    }
    catch{
        res.status(500).json({message: error.message});
    }
}

async function getCategoryByNameController(req , res) {
    try{
        return getCategoryByNameService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function editCategoryController(req , res) {
    try{
        console.log("debug");
        return editCategoryService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}


export default createCategoryController
export { getAllCategoryController , getCategoryByNameController , editCategoryController};