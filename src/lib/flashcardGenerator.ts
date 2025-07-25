import { Ollama } from "./ollama";
export class FlashcardGenerator {
  private ollama: Ollama

  constructor() {
    this.ollama = new Ollama();
  }

  async fromText(text: string, count = 5): Promise<object> {
    const prompt = `Generate ${count} flashcards from the following text: ${text}`;
    const result = await this.ollama.generate(prompt);

    return result
  }

}
