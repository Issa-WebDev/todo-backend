import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;
