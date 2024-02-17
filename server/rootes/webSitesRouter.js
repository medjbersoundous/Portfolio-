import express from "express";
import websites from "../models/websitesModel.js";
import expressAsyncHandler from "express-async-handler";
import webSiteData from "../data/webSiteData.js"
const webSitesRouter = express.Router()
webSitesRouter.get("/see", expressAsyncHandler(async (req, res) => {
    const createWebsites = await websites.insertMany(webSiteData.websites, { timeout: 30000 });
    res.send({ createWebsites });
}));
webSitesRouter.get("/", expressAsyncHandler(async(req,res)=>{
    const apps = await websites.find({})
    res.send(apps)
}))
export default webSitesRouter