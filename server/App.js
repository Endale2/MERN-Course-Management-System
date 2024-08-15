import express from 'express';
import connectDB from'./config/db.js'
import cors from'cors';
import dotenv from'dotenv';
import { userRouter } from './routes/userRouter.js';
import { courseRouter } from './routes/courseRoutes.js';
import { categoryRouter } from './routes/categoryRoutes.js';
import { lessonRouter } from './routes/lessonRoutes.js';
import { enrollmentRouter } from './routes/enrollmentRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin:'http://localhost:5173', optionsSuccessStatus:200}));
app.use(express.json());
app.use(errorHandler);
app.use(cookieParser());

//routers
app.use('/api/auth', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/enrollments', enrollmentRouter);

// Connect to the database
connectDB();



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
