import express from "express";
import {
  createNote,
  getAllNotes,
  deleteNote,
  updateNote,
} from "../controllers/backendControllers.js";

const router = express.Router();

router.post("/create-notes", createNote);

router.get("/get-all-notes", getAllNotes);

// Farkhan Roihan
router.post("/update-notes/:noteID", updateNote);

//fakhriyyah deletenote//
router.delete("/notes/:id", deleteNote);

export default router;