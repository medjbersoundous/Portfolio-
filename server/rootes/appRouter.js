import express from "express";
import Apps from "../models/appModel.js";
import expressAsyncHandler from "express-async-handler";
import AppData from "../data/Appdata.js"
const appRouter = express.Router()
appRouter.get("/see", expressAsyncHandler(async(req,res)=>{
    const createApps = await Apps.insertMany(AppData.apps)
    res.send({createApps})
}))
appRouter.get("/", expressAsyncHandler(async(req,res)=>{
    const apps = await Apps.find({})
    res.send(apps)
}))