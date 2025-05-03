const express=require("express");
const {registerUser,loginUser,getUserProfile,updateUserProfile}=require("../controllers/authcontroller");
const { protect } = require("../Middlerware/authMiddleware");

const router=express.Router();
// auth routers

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/profile",protect,getUserProfile)
router.put("/profile",protect,updateUserProfile)

module.exports=router