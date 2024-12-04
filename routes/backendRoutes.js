import express from 'express';
import { createNote, getAllNotes, deleteNote } from '../controllers/backendControllers.js';

const router = express.Router();

router.post('/create-notes', createNote);

router.get('/get-all-notes', getAllNotes);

router.post("/del-notes", deleteNote);

// router.get("/notes", getAllNotes);

// router.delete("/notes/:id", deleteNote);

export default router;
