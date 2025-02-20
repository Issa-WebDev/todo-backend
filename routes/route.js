import express from "express";
import {
  allTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/controllers.js";
const router = express.Router();

router.get("/", allTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
