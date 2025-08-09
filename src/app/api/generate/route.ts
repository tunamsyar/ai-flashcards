import { NextRequest, NextResponse } from "next/server";
import { FlashcardGenerator } from "@/lib/flashcardGenerator";
import { Errors, handleApiError } from "@/lib/errors";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text) throw Errors.BadRequest("Text is required!")

    const generator = new FlashcardGenerator()
    const result = await generator.fromText(text)

    return NextResponse.json(result)

  } catch(error) {
    console.error(error)

    const { status, body } = handleApiError(error);

    return NextResponse.json(body, { status })
  }

}
