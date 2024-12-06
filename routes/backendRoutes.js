import express from 'express';
import { createNote, getAllNotes, deleteNote, updateNote } from '../controllers/backendControllers.js';

const router = express.Router();

router.post('/create-notes', createNote);

router.get('/get-all-notes', getAllNotes);

router.post("/del-notes", deleteNote);

//fakhriyyah deletenote//
router.post("/notes", createNote);

router.post("/update-notes/:noteId", updateNote);

router.delete("/notes/:id", deleteNote);

export default router;

