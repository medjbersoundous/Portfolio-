import mongoose from "mongoose";
const websitesModel = new mongoose.Schema(
    {
        name: {type:String, required: true, unique:true},
        image: {type:String},
        projectLink:{type:String, required:false},
        githubLink:{type:String, required:false},
        description:{type:String},
        technologie:{type:String}
    },
    {
        timestamps:true,
    }
)
const websites = mongoose.model("websites", websitesModel)
export default websites; 
