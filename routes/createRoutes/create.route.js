import express from "express";
import createCategoryController from "../../controller/category.controller.js";
import createSubCategoryController from "../../controller/subCategory.controller.js";
import createItemsController from "../../controller/items.controller.js";

const createRouter = express.Router();

createRouter.post('/category' , createCategoryController);
createRouter.post('/subcategory' , createSubCategoryController);
createRouter.post('/items' , createItemsController)

export default createRouter;