import express from "express";
import { editCategoryController } from "../../controller/category.controller.js";
import { editSubCategoryController } from "../../controller/subCategory.controller.js";
import { editItemController } from "../../controller/items.controller.js";

const editRouter = express.Router();

editRouter.put('/editCategory/:id' , editCategoryController);
editRouter.put('/editSubCat/:id' , editSubCategoryController);
editRouter.put('/editItem/:id' , editItemController)

export default editRouter;