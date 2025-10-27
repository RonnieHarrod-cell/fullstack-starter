import { Router } from "express";
import { randomUUID } from "crypto";
import { error } from "console";

type Note = {
  id: string;
  title: string;
  content?: string;
};

const router = Router();

const notes = new Map<string, Note>();

router.get("/", (_req, res) => {
  res.json(Array.from(notes.values()));
});

router.get("/:id", (req, res) => {
  const note = notes.get(req.params.id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
});

router.post("/", (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const note: Note = { id: randomUUID(), title, content };
  notes.set(note.id, note);
  res.status(201).json(note);
});

router.put("/:id", (req, res) => {
  const note = notes.get(req.params.id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  const { title, content } = req.body;
  const updated = {
    ...note,
    title: title ?? note.title,
    content: content ?? note.content,
  };
  notes.set(updated.id, updated);
  res.json(updated);
});

router.delete("/:id", (req, res) => {
  const deleted = notes.delete(req.params.id);
  res.status(deleted ? 204 : 404).end();
});

export default router;
