import { ResponseHandler } from "./responseHandler";
export class Ollama {
  private baseUrl: string;
  private model: string;

  constructor(
    baseUrl: string = process.env.OLLAMA_URL || "",
    model: string = process.env.OLLAMA_MODEL || "phi"
  ) {
    this.baseUrl = baseUrl;
    this.model = model;
  }

  async generate(prompt: string): Promise<object> {
    const response = await fetch(`${this.baseUrl}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: this.model,
        prompt: prompt,
        format: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  question: { type: "string" },
                  answer: { type: "string" }
                },
                required: ["question", "answer"]
              }
            }
          },
          required: ["data"],
        },
        stream: false,
      }),
    });

    if (!response.ok) {
      ResponseHandler.handleError(response);
    }

    const responseData = await response.json();

    return responseData || {};
  }
}
