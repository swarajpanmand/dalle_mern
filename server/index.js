import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E API" });
});

const startServer = async () => {
  try {
    const mongoDBUrl = process.env.MONGO_URI;
    if (!mongoDBUrl) {
      throw new Error("MONGODB_URL is not defined in the environment variables");
    }
    await connectDB(mongoDBUrl);
    console.log("Connected to MongoDB");
    
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();