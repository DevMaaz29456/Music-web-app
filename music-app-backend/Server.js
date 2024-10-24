import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/song", songRouter);

app.get("/", (req, res) => res.send("API Working"));

// Connect to MongoDB and then start the server
const startServer = async () => {
  try {
    await connectDB(); // Wait for MongoDB connection
    connectCloudinary(); // Connect to Cloudinary

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
