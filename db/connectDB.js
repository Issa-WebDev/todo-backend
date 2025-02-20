import mongoose from "mongoose";

async function connectDB(database_url) {
  try {
    await mongoose.connect(database_url);
    console.log("Database connected ✅");
  } catch (error) {
    console.log("Erreur de connexion à MongoDB ❌", error);
    process.exit(1);
  }
}

export default connectDB;
