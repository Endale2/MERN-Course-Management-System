import express from 'express';
import connectDB from'./config/db.js'
import cors from'cors';
import dotenv from'dotenv';
import { userRouter } from './routes/userRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//routers

app.use("/auth", userRouter)

// Connect to the database
connectDB();



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
