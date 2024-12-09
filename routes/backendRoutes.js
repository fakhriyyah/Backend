import express from "express";
import {
  createNote,
  getAllNotes,
  deleteNote,
  updateNote,
  getOneNote,
} from "../controllers/backendControllers.js";

const router = express.Router();

// Ammar Alfaysyah
router.post("/create-notes", createNote);

// Saryal
router.get("/get-all-notes", getAllNotes);

// Farkhan
router.get("/get-one-notes/:id", getOneNote);

// Farkhan Roihan
router.post("/update-notes/:noteID", updateNote);

//fakhriyyah deletenote//
router.delete("/notes/:id", deleteNote);

export default router;
