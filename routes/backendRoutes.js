import express from 'express';
import { createNote, getAllNotes } from '../controllers/backendControllers.js';

const router = express.Router();

router.post('/notes', createNote);

router.get('/notes', getAllNotes);

export default router;
