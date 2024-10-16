import mongoose from "mongoose";

const connectDB = async (url) => {
  if (!url) {
    throw new Error("MongoDB connection URL is not provided");
  }

  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

export default connectDB;