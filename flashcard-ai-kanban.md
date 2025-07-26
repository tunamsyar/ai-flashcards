
# 📚 Flashcard AI App — Project Kanban

## ✅ Done
- [x] Initialized Next.js app with TypeScript
- [x] Dockerfile created
- [x] HuggingFace configured
- [x] Supabase project set up
- [x] Create Ollama FlashcardGenerator class with `fromText
- [x] FlashcardGenerator base logic created (skeleton)
- [x] Set up `/api/generate` route and plug in FlashcardGenerator

## 🟩 Backlog
(content: string): Flashcard[]`
- [ ] Add parsing logic for HuggingFace raw output → `[{ question, answer }]`
- [ ] Create Supabase `flashcards` table (SQL schema)
- [ ] Create Supabase wrapper to save flashcards
- [ ] Create `/api/save` route to persist flashcards (if separate from generate)
- [ ] Set up Supabase Auth (email or GitHub login)
- [ ] Create login + register UI pages
- [ ] Implement auth middleware for protected routes (e.g., saving flashcards)
- [ ] Build Flashcard UI
- [ ] Add text input UI for users to input source content
- [ ] Connect form to `/api/generate`
- [ ] Preview flashcards in UI after generation
- [ ] Add button to "Save to My Deck"

## 🔨 In Progress

## 🧪 Testing
- [ ] Test flashcard generation edge cases (very short/long input)
- [ ] Test Supabase insertions (duplicate entries, auth errors)
- [ ] Validate HuggingFace rate limits and error handling
- [ ] Test UI flow: Login → Input → Generate → Save → View Deck

## 🚀 Later / Nice to Have
- [ ] Add flashcard editing (question or answer)
- [ ] Add deck tagging (e.g., "Biology", "AI", "History")
- [ ] Add flashcard difficulty rating or confidence level
- [ ] Add Spaced Repetition support (SM-2 algorithm)
- [ ] Deploy frontend to Vercel
- [ ] Add Supabase Edge Functions for custom auth logic or heavy processing
- [ ] Export deck to Anki or CSV
