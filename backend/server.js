import { v2 as cloudinary } from "cloudinary";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_name: process.env.CLOUDINARY_API_KEY,
  cloud_name: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`server is runnning on port ${PORT}`);
  connectMongoDB();
});
