const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const s_key = process.env.JWT_SECRET_KEY;
// jwt generation function
const generateToken = (id)=>{
   return  jwt.sign({id},s_key,{expiresIn:'3d'})
}
// Login
const loginuser = async (req, res) => {
   // res.json({msg:"Login user"});
   const {email,password} = req.body;
   try{
      const user = await User.login(email,password);
      const token = generateToken(user._id);
      res.status(200).json({email,token});
   }catch(error){
      res.status(400).json({error:error.message}); 
   }
}
// Register
const registration = async (req,res)=>{
  
   const {email,password} = req.body;
   try{
      const user = await User.signup(email,password);
      const token = generateToken(user._id);
      res.status(200).json({email,token});
   }catch(error){
      res.status(400).json({error:error.message});
}
}

module.exports = {loginuser,registration}
