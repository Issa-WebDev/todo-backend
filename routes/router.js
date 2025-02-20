import express from "express";
import {
  allTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/controller.js";
const router = express.Router();

router.post("/", createTodo);
router.get("/", allTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
