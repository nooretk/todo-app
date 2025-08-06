import express from "express";
import todosRoutes from "./routes/todos.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/todos", todosRoutes);

app.use("/", (req, res) => res.status(200).send("Welcome to Todo API"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
