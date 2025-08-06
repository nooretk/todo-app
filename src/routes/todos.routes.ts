import { Router } from "express";
import type { Request, Response } from "express";
import type { Todo } from "../types/todo.types";

const router = Router();

// managing todos in memory
let todos: Todo[] = [];
let counter = 1;

// GET: get all todos
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(todos);
});

// GET: get specific to do by id
router.get("/:id", (req: Request, res: Response) => {
  let id = parseInt(req.params.id!);
  let todo = todos.find((todo) => todo.id === id);
  console.log(todo);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).send(`Todo with id: ${id} is not found.`);
  }
});

// POST: create a new todo
router.post("/", (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send("Bad request");
  }

  const newTodo: Todo = {
    id: counter++,
    text: text,
    createdAt: new Date(),
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

export default router;
