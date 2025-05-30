const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{});
        console.log("MongoDB connected")
    }catch(err){
        console.log("Error connected to mongoose",err)
        process.exit(1);
    }
}
module.exports= connectDB;