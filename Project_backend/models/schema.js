const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Wschema = new Schema({
    title:{
        type:String,
        required:[true,"Title must be provided"]
    },
    reps:{
        type:Number,
        required:[true,"Reps must be provided"]
    },
    load:{
        type:Number,
        required:[true,"Load must be provided"]
    },
    user_id:{
        type:String,
        required:true
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
},{timestamps:true})
module.  exports = mongoose.model("Workout",Wschema)