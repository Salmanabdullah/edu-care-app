import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import mapRoutes from "./routes/mapRoute.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

// Middleware to parse request body
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/user", userRoutes);
app.use("/api", mapRoutes);

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
