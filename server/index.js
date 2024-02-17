import express from "express"
import webSitesRouter from "./rootes/webSitesRouter.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/websites", webSitesRouter)
app.get("/", (req,res)=>{
  res.send("sever is ready at port 3000 ")
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
