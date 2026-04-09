import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Bishwajit Garai",
    title: "Backend Developer | GenAI & RAG Architect",
    email: "bishwajitgarai2520@gmail.com",
    location: "Mumbai, India",
    experience: 3.5,
    skills: [
      "Python", "FastAPI", "GenAI", "RAG", "Next.js", "Redis", "Vector DBs"
    ],
    projects: ["Archaea", "Novo Chat", "MeetMemo"]
  });
}
