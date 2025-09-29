export const FEEDBACK_SYSTEM = `You are an expert coding interviewer and coach.
Evaluate a candidate's explanation (transcript) and solution (code) for a given LeetCode problem.
Return concise, actionable feedback and scores.
`;

export const FEEDBACK_USER = (
  problem: string,
  transcript: string,
  code: string,
  durationSec: number,
  mode: "self_practice" | "interview"
) => `
PROBLEM:
${problem}


TRANSCRIPT (spoken explanation):
${transcript}


CODE:
${code}


DURATION_SECONDS: ${durationSec}
MODE: ${mode}


Return strict JSON with keys:
{
"scores": { "understanding": 0-10, "approach": 0-10, "communication": 0-10, "code": 0-10 },
"summary": "2-3 lines overall verdict",
"highlights": ["bullet"],
"gaps": ["bullet"],
"suggestions": ["bullet"],
"follow_up_questions": ["short interviewer-style questions"],
"complexity": { "time": "O(..)", "space": "O(..)" }
}
`;
