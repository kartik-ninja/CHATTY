// this code defines a function connectDB, to establish a connection to a MONGODB Database using Mongoose
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MONGODB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error: ", error);
  }
};
