import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"

const GEMINI_MODEL = "google/gemini-2.0-flash-exp"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { transcript, targetRole, jobDescription } = body

    if (!transcript || typeof transcript !== "string") {
      return NextResponse.json(
        { success: false, error: "Transcript is required" },
        { status: 400 }
      )
    }

    console.log("[Gemini API] Processing interview transcript, length:", transcript.length)

    const prompt = `You are an expert interview coach providing brutally honest, constructive feedback.

You have been given a voice conversation transcript of a mock interview between an AI interviewer and a candidate. The candidate was applying for the position of "${targetRole || "a role"}".

${jobDescription ? `Job Description:\n${jobDescription}\n\n` : ""}

INTERVIEW TRANSCRIPT:
${transcript}

Your task is to provide a brutally honest, detailed analysis of the candidate's interview performance. Be direct, specific, and constructive. Focus on:

1. **Overall Performance** - Overall score (0-100) and summary
2. **Strengths** - What the candidate did well
3. **Weaknesses** - Areas that need significant improvement
4. **Specific Examples** - Quote specific moments from the interview
5. **Body Language & Delivery** - If mentioned or inferred
6. **Content Quality** - Relevance and depth of answers
7. **Areas for Improvement** - Specific, actionable recommendations
8. **Final Verdict** - Would you hire this candidate? Why or why not?

Be honest but fair. The candidate needs to know exactly where they stand and what they need to work on.

Format your response as a comprehensive, well-structured text analysis. Use clear sections and be specific with examples from the transcript.`

    const { text } = await generateText({
      model: GEMINI_MODEL,
      prompt: prompt,
      temperature: 0.7,
    })

    console.log("[Gemini API] Generated interview analysis, length:", text.length)

    return NextResponse.json({
      success: true,
      analysis: text,
    })
  } catch (error) {
    console.error("[Gemini API] Error processing interview:", error)
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}

