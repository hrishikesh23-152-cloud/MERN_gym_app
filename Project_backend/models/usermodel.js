const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema2({
    
    email:{
        type:String,
        required:[true,"Email must be provided"],   
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password must be provided"],
    },
},{timestamps:true})
userSchema.statics.signup = async function(email,password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }   
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email:email,password:hash})
    return user;
}
// static login method
userSchema.statics.login = async function (email,password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')      
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect password')
    }
    return user;
    
}
module.exports = mongoose.model("User",userSchema)