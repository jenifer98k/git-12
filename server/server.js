// Import required modules
import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
const cors = require('cors');
// Initialize the Express app
const app = express();
const port = process.env.PORT || 4000;
connectDB() 
import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173", // Local frontend (for testing)
  "https://git-12-client.vercel.app", // Deployed frontend
];



// Middleware
app.use(express.json());// all req wil be passed in json format
app.use(cookieParser());
// Allow requests only from your frontend domain
const corsOptions = {
    origin: 'https://git-12-client.vercel.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

// API Endpoints 
app.get("/", (req, res) => {
    res.send("Api working fine!");
  });
app.use('/api/auth' , authRouter)
app.use('/api/user' , userRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
