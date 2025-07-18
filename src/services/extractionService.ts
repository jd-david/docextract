/**
 * @file This file acts as the service layer for the extraction logic.
 * It abstracts the underlying AI agent calls and provides a clean interface
 * for the API routes to interact with.
 */

import { extractReceipt } from "../agents/receiptAgent";
import { Receipt } from "../schemas/receiptSchema";

/**
 * Orchestrates the receipt data extraction process.
 *
 * This function serves as a bridge between the API layer (routes) and the
 * AI agent. It calls the `extractReceipt` agent and handles any potential
- * errors, ensuring that the core logic is decoupled from the HTTP transport layer.
 *
 * @param {string} imageUrl - The URL of the receipt image to process.
 * @returns {Promise<Receipt>} A promise that resolves to the structured receipt data.
 * @throws {Error} Throws an error if the extraction process fails.
 */
export async function extractReceiptData(imageUrl: string): Promise<Receipt> {
  try {
    // Call the AI agent to perform the extraction.
    const result = await extractReceipt(imageUrl);
    // Return the validated and structured result.
    return result;
  } catch (error) {
    // Throw a generic error to be handled by the route.
    throw new Error("Failed to extract data from receipt.");
  }
}