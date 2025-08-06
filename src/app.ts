import express from "express";
import apiRouter from "./routes/api.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => res.status(200).send("Welcome to Todo API"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
