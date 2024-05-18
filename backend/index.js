import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware to parse request body
app.use(express.json());

// Middleware to handle cors policy
app.use(cors());

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening.....`);
    });
  })
  .catch(() => console.log("no connection"));