/**
 * @file This file contains the instructional prompt for the receipt extraction agent.
 * A clear, well-defined prompt is crucial for guiding the AI model to produce
 * accurate and consistently structured output.
 */

/**
 * The instructional prompt for receipt extraction.
 *
 * This template provides clear instructions to the generative model on how to process
 * the input image. It specifies the desired output format (JSON), the data points
 * to extract, and formatting rules for specific fields like the date.
 *
 * A well-crafted prompt is essential for steering the model's behavior and
 * ensuring the results align with the application's requirements.
 */
export const receiptPrompt = `
Extract structured data from the receipt image provided.
The output should be in a clean JSON format, adhering to the provided schema.

Instructions:
- Extract the vendor name, date, total amount, and all line items from the image.
- The date should be in YYYY-MM-DD format.
- Each item should have a name, quantity, and price.
- If a value is not present in the text, do not include the key in the output.
`;