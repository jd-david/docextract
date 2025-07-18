/**
 * @file This file defines the data schemas for receipt extraction.
 * Schemas are crucial for ensuring that the data returned by the AI model
 * is structured, typed, and validated automatically.
 */

import { z } from "genkit";

/**
 * Defines the schema for a single item on a receipt.
 *
 * By defining a schema for each component, we create a reusable and composable
 * structure. Each field is typed and includes a description, which can help the
 * AI model understand the expected data.
 */
export const receiptItemSchema = z.object({
  name: z.string().describe("Name of the item purchased"),
  quantity: z.number().describe("Quantity of the item purchased"),
  price: z.number().describe("Price of the item"),
});

/**
 * Defines the main schema for the entire receipt.
 *
 * This schema is used by the AI agent to structure its output. The framework
 * uses this schema to automatically validate the model's response, ensuring
 * that the data conforms to the expected format before it is returned to the client.
 * This eliminates the need for manual parsing and validation logic.
 */
export const receiptSchema = z.object({
  vendor: z.string().describe("The name of the vendor or store"),
  date: z
    .string()
    .describe("The date of the receipt in ISO 8601 format (YYYY-MM-DD)"),
  total: z.number().describe("The total amount of the receipt"),
  items: z.array(receiptItemSchema).describe("A list of items purchased"),
});

/**
 * A TypeScript type inferred from the `receiptSchema`.
 * This provides static type checking and autocompletion in the codebase,
 * improving developer experience and reducing runtime errors.
 */
export type Receipt = z.infer<typeof receiptSchema>;