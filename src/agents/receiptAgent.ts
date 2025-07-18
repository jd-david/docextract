/**
 * @file This file defines the core AI-powered extraction agent.
 * It uses a structured generation approach to ensure the output
 * conforms to a predefined schema.
 */

import AIModel from "../config/model";
import { receiptPrompt } from "../prompts/receiptPrompt";
import { receiptSchema } from "../schemas/receiptSchema";

/**
 * Executes the receipt extraction process using a generative AI model.
 *
 * This function orchestrates the AI interaction by combining a model,
 * a prompt, and an output schema. It sends the user's image URL
 * and a guiding prompt to the model, instructing it to return structured data
 * that matches the `receiptSchema`.
 *
 * @param {string} imageUrl - The URL of the receipt image to be processed.
 * @returns {Promise<object>} A promise that resolves to the structured data
 * extracted from the receipt, conforming to the `receiptSchema`.
 */
export async function extractReceipt(imageUrl: string) {
  // Use the AI model to generate structured data.
  // The `generate` method is a powerful feature that takes a complex prompt
  // and automatically parses the model's output into the specified schema.
  const llmResponse = await AIModel.generate({
    prompt: [
      { text: receiptPrompt }, // The instructional text prompt for the model.
      { media: { url: imageUrl, contentType: "image/jpeg" } }, // The image to be processed.
    ],
    output: {
      schema: receiptSchema, // The schema that defines the desired output structure.
    },
  });

  // Return the structured output from the model's response.
  // The framework handles the parsing and validation automatically.
  return llmResponse.output!;
}