"use client";

import { useState } from "react";
import { useFlashcards } from "@/hooks/useFlashcards";
import FlipCard from "../ui/FlipCard";

export default function FlashcardForm() {
  const [text, setText] = useState("");
  const { flashcards, loading, error, generateFlashcards } = useFlashcards();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateFlashcards(text);
    console.log(flashcards, "FLASHCARDS")
  };

  return (
    <div className="mx-auto p-6">
      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Generate Flashcards
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text or notes here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-dots">Loading</span>
            ) : (
              "Generate Flashcards"
            )}
          </button>
        </form>
        {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
      </div>

      {/* Flashcard Results */}
      {flashcards.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10">
          {flashcards.map((card, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[200px] max-w-[48%] aspect-[4/3]"
            >
              <FlipCard
                flashCard={{
                  front: card.question,
                  back: card.answer,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
