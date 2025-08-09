import { useState } from "react";
import { AppError } from "@/lib/errors"
import { apiRequest } from "@/lib/apiClient";

export interface Flashcard {
  question: string;
  answer: string;
}

export function useFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generateFlashcards(text: string) {
    setLoading(true)
    setError(null)

    try {
      const res = await apiRequest<{ data: Flashcard[] }>("/api/generate", {
        method: "POST",
        body: JSON.stringify({ text }),
      });

      const data = res.data;
      setFlashcards(data);

    } catch(err) {
      setError(err instanceof AppError ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return { flashcards, loading, error, generateFlashcards }
}
