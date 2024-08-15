import express from 'express';
import { createCourse, getCourses } from '../controllers/courseController.js';

const router = express.Router();

router.post('/create', createCourse);
router.get('/', getCourses);

export { router as courseRouter };
