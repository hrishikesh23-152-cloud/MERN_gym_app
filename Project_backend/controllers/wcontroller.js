const Workout = require("../models/schema")

// get method to fetch all workouts
const getall = async (req,res)=>{
    const user_id = req.user._id;
    const workouts = await Workout.find({user_id});
    res.status(200).json(workouts)
}
// get a single workout
const getsinglew = async(req,res)=>{
    const {id} = req.params ;
    const singlew = await Workout.findById(id);
    if(singlew){
        res.status(200).json(singlew)
    }else{
        res.status(404).json({error:error.message} )
    }
}
// create a new workout
const createw = async (req,res)=>{
    const { title,reps,load} = req.body
    try{
        const user_id = req.user._id;
        const workout = await Workout.create({title,reps,load,user_id})
        console.log(workout)
        res.status(200).json(workout)  
    }catch(error){
        res.status(400).json({error:error.message});
    }
 
}
// delete a workout
const deletew = async (req,res)=>{
    const dltw = await Workout.findByIdAndDelete(req.params.id);
    if(dltw){
        res.status(200).json(dltw)  
    }else{
        res.status(404).send("No workout found")
    }   
}
// update a workout
const updatew = async (req,res)=>{
    const {id}=req.params;
    const upadate = await Workout.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
    if(upadate){
        res.status(200).json(upadate)
    }else{
        res.status(404).json({error:"No workout found"})
    }
}

module.exports = {
    createw,getall,getsinglew,deletew,updatew
 }