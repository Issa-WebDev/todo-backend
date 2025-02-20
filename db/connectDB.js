import mongoose from "mongoose";

const connectDB = async (database_url) => {
  try {
    await mongoose.connect(database_url);
    console.log("Database connected ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
