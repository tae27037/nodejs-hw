import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', getAllNotes, celebrate(getAllNotesSchema));
router.get('/notes/:noteId', getNoteById, celebrate(noteIdSchema));
router.post('/notes', createNote, celebrate(createNoteSchema));
router.delete('/notes/:noteId', deleteNote, celebrate(noteIdSchema));
router.patch('/notes/:noteId', updateNote, celebrate(updateNoteSchema));

export default router;
