import express from 'express';
import { createNote, getAllNotes, deleteNote } from '../controllers/backendControllers.js';

const router = express.Router();

router.post('/notes', createNote);

router.get('/notes', getAllNotes);



router.post("/notes", createNote);

router.get("/notes", getAllNotes);

router.delete("/notes/:id", deleteNote);

export default router;

