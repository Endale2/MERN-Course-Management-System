import express from 'express';
import { createLesson, getLessons } from '../controllers/lessonController.js';

const router = express.Router();

router.post('/create', createLesson);
router.get('/', getLessons);

export { router as lessonRouter };
