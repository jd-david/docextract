/**
 * @file This file configures and initializes the generative AI model.
 * It uses a plugin-based architecture to integrate a specific AI provider
 * and make the model available for use in AI-powered flows.
 */

import googleAI, { gemini20FlashLite } from "@genkit-ai/googleai";
import { genkit } from "genkit";

/**
 * Configures the AI model for the application.
 *
 * This instance uses a plugin to integrate with a generative AI provider.
 * The chosen model is specified, and the configuration is wrapped in `genkit`
 * to make it accessible to other parts of the framework, such as agents and flows.
 *
 * The plugin system allows for easy swapping of models and providers without
 * changing the core application logic.
 */
const AIModel = genkit({
  plugins: [googleAI()], // The plugin for the AI provider.
  model: gemini20FlashLite, // The specific model to be used.
});

export default AIModel;