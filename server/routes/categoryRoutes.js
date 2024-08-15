import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/create', createCategory);
router.get('/', getCategories);

export { router as categoryRouter };
