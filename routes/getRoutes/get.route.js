import express from 'express';
import { getAllCategoryController, getCategoryByNameController } from '../../controller/category.controller.js';
import { getAllSubCategoryByCategoryController, getAllSubCategoryByNameController, getAllSubCategoryController } from '../../controller/subCategory.controller.js';
import { get } from 'mongoose';
import { getAllItemsController, getItemByCategoryController, getItemBySubCatController, getItemsByNameController } from '../../controller/items.controller.js';
const getRouter = express.Router();

getRouter.get('/allCategory' , getAllCategoryController);
getRouter.get('/getCategoryByName' , getCategoryByNameController)

getRouter.get('/getAllSubCategory' , getAllSubCategoryController);
getRouter.get('/getSubCategoryByCategory' , getAllSubCategoryByCategoryController);
getRouter.get('/getAllSubCatByName' , getAllSubCategoryByNameController)

getRouter.get('/getAllItems' , getAllItemsController)
getRouter.get('/getItemsByCategory' , getItemByCategoryController)
getRouter.get('/getItemsBySubCategory' , getItemBySubCatController)
getRouter.get('/getItemsByNameorId' , getItemsByNameController)

export default getRouter;