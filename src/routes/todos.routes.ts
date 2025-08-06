import { Router } from "express";
import type { Request, Response } from "express";
import type { Todo } from "../types/todo.types";

const router = Router();

// managing todos in memory
let todos: Todo[] = [
  {
    id: 1,
    text: "nour",
    createdAt: new Date(),
    completed: false,
  },
];

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(todos);
});

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

export default router;
