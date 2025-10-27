import express from "express";
import cors from "cors";
import "dotenv/config";
import notesRouter from "./routes/notes";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from express API!" });
});

app.use("/api/notes", notesRouter);

app.get("/health", (_req, res) => res.send("OK"));

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
