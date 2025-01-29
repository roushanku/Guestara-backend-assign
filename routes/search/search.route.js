import express from 'express';
import searchItemController from '../../controller/search.controller.js';

const searchRouter = express.Router();

searchRouter.get('/searchItem', searchItemController)

export default searchRouter;