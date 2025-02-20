import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import router from "./routes/route.js";

dotenv.config();
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

connectDB(database_url);

app.use("/tasks", router);

app.listen(port, () => console.log(`Server is running on port ==> ${port}`));
