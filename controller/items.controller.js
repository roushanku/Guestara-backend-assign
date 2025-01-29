import createItemsServices, { editItemService, getAllItemsService, getItemByCategoryService, getItemBySubCatService, getItemsByNameService } from "../service/items.service.js";
async function createItemsController(req , res) {
    try{
        return createItemsServices(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllItemsController(req , res) {
    try{
        return getAllItemsService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getItemByCategoryController(req , res) {
    try{
        return getItemByCategoryService(req , res);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

async function getItemBySubCatController(req , res) {
    try{
        return getItemBySubCatService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getItemsByNameController(req , res) {
    try{
        return getItemsByNameService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function editItemController(req , res) {
    try{
        return editItemService(req , res);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}
export default createItemsController;
export { getAllItemsController , getItemByCategoryController , getItemBySubCatController , getItemsByNameController , editItemController};