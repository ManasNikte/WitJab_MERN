import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { UserRouter } from "./routes/user.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
// Routes
app.use('/auth', UserRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
