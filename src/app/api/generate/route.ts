import { NextRequest, NextResponse } from "next/server";
import { FlashcardGenerator } from "@/lib/flashcardGenerator";

export async function POST(request: NextRequest) {
  const { text } = await request.json()

  try {
    const generator = new FlashcardGenerator()
    const result = await generator.fromText(text)

    return NextResponse.json({result})
  } catch(error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to generate flashcards' },
      { status: 500 }
    )
  }

}
