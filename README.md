# Docextract

A modular document extraction platform built with Node.js, TypeScript, Express.js, and Genkit. This project demonstrates how to use Genkit to simplify interactions with Large Language Models (LLMs) for structured data extraction.

The initial focus of this project is to extract structured data from receipt documents.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/jd-david/docextract.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd docextract
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

This project uses a `.env` file to manage environment variables. To use the Gemini API, you need to provide your API key.

1.  Create a `.env` file in the root of the project.
2.  Add the following line to the `.env` file:

    ```
    GEMINI_API_KEY=your_gemini_api_key
    ```

    Replace `your_gemini_api_key` with your actual Gemini API key.

## Usage

### Development

To run the project in development mode with hot-reloading, use the following command:

```bash
npm run dev
```

This will start the server, and it will automatically restart when you make changes to the source code.

### Production

To build and run the project in production mode, use the following commands:

```bash
npm run build
npm start
```

## Testing the API

You can test the receipt extraction API by sending a POST request to the `/extract/receipt` endpoint with a raw text receipt.

Here's an example using `curl`:

```bash
curl -X POST http://localhost:3000/api/extract/receipt \
-H "Content-Type: application/json" \
--data '{
  "imageUrl": "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?semt=ais_hybrid&w=740"
}'
```

You should receive a JSON response with the extracted data.

## Project Structure

```
docextract/
├── src/
│   ├── agents/                  # Genkit agents (e.g., receiptAgent.ts)
│   ├── prompts/                 # LLM prompt templates (e.g., receiptPrompt.ts)
│   ├── services/                # Core logic that calls agents and validates output
│   ├── schemas/                 # Zod schemas for structured output
│   ├── utils/                   # Utility functions (formatting, fallback handling)
│   ├── routes/                  # Express.js HTTP endpoints
│   └── index.ts                 # App entry point that launches server and routes
├── public/                      # Test files, example receipts
├── genkit.config.ts             # Genkit + Gemini config
├── tsconfig.json                # TypeScript settings
├── .env                         # Environment variables
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project usage documentation
```

## Dependencies

-   [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js
-   [Genkit](https://firebase.google.com/docs/genkit): An open source framework from Google to help build, deploy and monitor AI-powered features and applications.
-   [Zod](https://zod.dev/): TypeScript-first schema validation with static type inference
-   [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file

## License

This project is licensed under the ISC License.

