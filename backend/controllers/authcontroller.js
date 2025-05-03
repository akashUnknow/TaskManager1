const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const genrateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"7d"});
}

const registerUser=async()=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message})        
    }
}
const loginUser=async()=>{ try {
        
} catch (error) {
    res.status(500).json({message:"Server error",error:error.message})        
}}
const getUserProfile=async()=>{ try {
        
} catch (error) {
    res.status(500).json({message:"Server error",error:error.message})        
}}
const updateUserProfile=async()=>{ try {
        
} catch (error) {
    res.status(500).json({message:"Server error",error:error.message})        
}}

module.exports={registerUser,loginUser,getUserProfile,updateUserProfile}