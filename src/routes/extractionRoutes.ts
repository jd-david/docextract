/**
 * @file This file defines the API routes for the document extraction service.
 * It handles incoming HTTP requests and delegates the core logic to the
 * appropriate service layer.
 */

import { Router } from "express";
import { extractReceiptData } from "../services/extractionService";

const router = Router();

/**
 * Route for handling receipt extraction requests.
 *
 * This endpoint accepts a POST request containing the URL of a receipt image.
 * It validates the input and passes the URL to the extraction service, which
 * orchestrates the AI-powered data extraction.
 */
router.post("/extract/receipt", async (req, res) => {
  // Extract the image URL from the request body.
  const { imageUrl } = req.body;

  // Basic input validation to ensure the image URL is provided.
  if (!imageUrl || typeof imageUrl !== "string") {
    return res.status(400).json({
      error:
        'Invalid input: "imageUrl" field is required and must be a string.',
    });
  }

  try {
    // Delegate the extraction logic to the service layer.
    // The service will call the underlying AI agent to process the image.
    const data = await extractReceiptData(imageUrl);
    // Return the extracted data as a JSON response.
    res.json(data);
  } catch (error) {
    // Handle any errors that occur during the extraction process.
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;