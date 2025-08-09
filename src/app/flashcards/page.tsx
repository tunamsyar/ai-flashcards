import FlashcardForm from "@/components/flashcards/FlashcardForm";

export default function FlashcardsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Flashcard Generator</h1>
      <FlashcardForm />
    </main>
  );
}
