import express from 'express';
import {protect} from '../middleware/authMiddleware.js'
import {registerUser, loginUser, getMe} from '../controllers/userController.js'; 



const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
// router.post('/refresh', refreshToken); 
//router.post('/logout', logoutUser);
router.get('/me', protect, getMe); 



export  {router as userRouter};