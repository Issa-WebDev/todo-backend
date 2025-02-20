import { request } from "express";
import taskModel from "../models/taskModel.js";

async function allTask(req, res) {
  try {
    const tasks = await taskModel.find();
    res.status(201).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(501);
  }
}

async function createTask(req, res) {
  try {
    const newTask = new taskModel(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(501);
  }
}

async function updateTask(req, res) {
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(501);
  }
}

async function deleteTask(req, res) {
  try {
    await taskModel.findByIdAndDelete(req.params.id);
    res.status(201).json({ massage: "task succesfully deleted ✅" });
  } catch (error) {
    console.log(error);
    res.status(501);
  }
}

export { allTask, createTask, updateTask, deleteTask };
