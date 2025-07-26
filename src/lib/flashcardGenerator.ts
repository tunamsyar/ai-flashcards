import { Ollama } from "./ollama";
export class FlashcardGenerator {
  private ollama: Ollama

  constructor() {
    this.ollama = new Ollama();
  }

  async fromText(text: string, count = 5): Promise<object> {
    const prompt = `Generate ${count} flashcards from the following text: ${text}`;

    interface OllamaResult {
      response?: any;
      error?: any;
      [key: string]: any;
    }

    try {
      const result = await this.ollama.generate(prompt) as OllamaResult;

      if (!result || typeof result !== 'object') {
        throw new Error("Invalid response format from Ollama.");
      }

      if ('error' in result) {
        throw new Error(String(result.error) || "Failed to generate flashcards.");
      }

      return JSON.parse(result.response) || [];

    } catch (error) {
      const message =
        error instanceof Error
          ? `Error generating flashcards: ${error.message}`
          : "Unknown error generating flashcards.";

      throw new Error(message);
    }
  }


}
