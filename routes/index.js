import express from "express";
import createRouter from "./createRoutes/create.route.js";
import getRouter from "./getRoutes/get.route.js";
import editRouter from "./editRoutes/edit.route.js";
import searchRouter from "./search/search.route.js";
const rootRouter = express.Router();


const defaultRouter = [
    {
        path : '/create',
        router : createRouter
    },
    {
        path : '/get',
        router : getRouter
    },
    {
        path : '/edit',
        router : editRouter
    },
    {
        path : '/search',
        router : searchRouter
    }
]

defaultRouter.forEach((route)=>{
    rootRouter.use(route.path, route.router);
})

export default rootRouter;