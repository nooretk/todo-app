import { Router } from "express";
import type { Request, Response } from "express";
import type { Todo } from "../types/todo.types";
import { Status } from "../types/status.enum";

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
    status: Status.created,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PATCH: edit todo status
router.patch("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id!);
  const todo = todos.find((todo: Todo) => todo.id === id);

  if (!todo) return res.status(404).send(`Todo with id: ${id} is not found.`);

  const { status } = req.body;

  if (!Object.values(Status).includes(status))
    return res.status(400).send(`Invalid status: ${status}`);

  todo.status = status;
  res.status(200).json(todo);
});

// DELETE: delete a todo
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id!);

  const index = todos.findIndex((todo: Todo) => todo.id === id);

  if (index === -1)
    return res.status(404).send(`Todo with id: ${id} is not found.`);

  todos.splice(index, 1);

  res.status(200).send(`Todo with id ${id} deleted successfully.`);
});

export default router;
