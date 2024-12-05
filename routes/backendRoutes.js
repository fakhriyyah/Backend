import express from 'express';
import { createNote, getAllNotes, deleteNote } from '../controllers/backendControllers.js';

const router = express.Router();

router.post('/create-notes', createNote);

router.get('/get-all-notes', getAllNotes);

router.post("/del-notes", deleteNote);

<<<<<<< HEAD
//fakhriyyah deletenote//
router.post("/notes", createNote);

router.get("/notes", getAllNotes);

router.delete("/notes/:id", deleteNote);
=======
// router.get("/notes", getAllNotes);

// router.delete("/notes/:id", deleteNote);
>>>>>>> 714973ba99dfc93779ae5011db891e1e6276203d

export default router;

