import TodoModel from "../models/todoModel.js";

const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.log(error);
    res.status(501);
  }
};

const allTodo = async (req, res) => {
  try {
    const alltodos = await TodoModel.find();
    res.status(201).json(alltodos);
  } catch (error) {
    console.log(error);
    res.status(501);
  }
};

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(501);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo removed ✅" });
  } catch (error) {
    console.log(error);
    res.status(501);
  }
};

export { createTodo, allTodo, updateTodo, deleteTodo };
