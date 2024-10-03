import mongoose from "mongoose";
export const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.database_url);
         console.log(`connected to db :${conn.connection.host}`)
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1);
    }
}