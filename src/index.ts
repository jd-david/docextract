/**
 * @file This file is the entry point for the Docextract server.
 * It sets up an Express application, configures middleware, and defines API routes.
 */

import dotenv from "dotenv";
dotenv.config(); // Load environment variables from a .env file.

import express from "express";
import extractionRoutes from "./routes/extractionRoutes";
import cors from "cors";

// Initialize the Express application.
const app = express();
const port = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing (CORS) for all routes.
app.use(cors());

// Middleware to parse JSON request bodies.
app.use(express.json());

// Register the API routes under the /api namespace.
app.use("/api", extractionRoutes);

// A simple root endpoint to confirm the server is running.
app.get("/", (_, res) => {
  res.send("Docextract API is running!");
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});