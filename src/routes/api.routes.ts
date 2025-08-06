import { Router } from "express";
import todosRoutes from "./todos.routes";

const apiRouter = Router();

apiRouter.use("/todos", todosRoutes);

export default apiRouter;
