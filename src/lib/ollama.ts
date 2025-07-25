export class Ollama {
  private baseUrl: string;
  private model: string;

  constructor(
    baseUrl: string = process.env.OLLAMA_URL || "",
    model: string = process.env.OLLAMA_MODEL || ""
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
      }),
    });

    if (!response.ok) {
      throw new Error(`Error generating text: ${response.statusText}`);
    }

    const data = await response.json();
    return data || {};
  }
}
