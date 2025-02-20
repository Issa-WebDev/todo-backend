import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import router from "./routes/router.js";
const app = express();

dotenv.config();
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL;

app.use(express.json());
app.use(cors());

connectDB(database_url);

app.use("/todos", router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
