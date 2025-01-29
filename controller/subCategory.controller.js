import createSubCategoryService, { editSubCategoryService, getAllSubCategoryByCategoryService, getAllSubCategoryByNameService, getAllSubCategoryService } from "../service/subCategory.service.js";

async function createSubCategoryController(req , res) {
    try{
        return createSubCategoryService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllSubCategoryController(req , res) {
    try{
        return getAllSubCategoryService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllSubCategoryByCategoryController(req , res) {
    try{
        return getAllSubCategoryByCategoryService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllSubCategoryByNameController(req , res) {
    try{
        return getAllSubCategoryByNameService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function editSubCategoryController(req , res) {
    try{
        return editSubCategoryService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}
export default createSubCategoryController;
export {getAllSubCategoryController , getAllSubCategoryByCategoryController , getAllSubCategoryByNameController , editSubCategoryController};