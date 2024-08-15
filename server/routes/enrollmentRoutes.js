import express from 'express';
import { enrollInCourse, getEnrollments } from '../controllers/enrollmentController.js';

const router = express.Router();

router.post('/enroll', enrollInCourse);
router.get('/', getEnrollments);

export { router as enrollmentRouter };
