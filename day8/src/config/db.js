import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect('');
        console.log("mongoose connected")

    }catch (error){
        console.log("MongoDB Connection Failed: ",
        error.message);
        process.exit(1);
    }
    
}