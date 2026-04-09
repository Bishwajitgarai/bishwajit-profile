import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    identity: {
      name: "Bishwajit Garai",
      title: "Backend & GenAI Architect",
      class: "System Designer",
      level: "3.5y Experience",
      location: "Mumbai, India",
      alignment: "True Neutral (Logic-First)",
      contact: {
        email: "bishwajitgarai2520@gmail.com",
        github: "Bishwajit-garai",
        linkedin: "bishwajitgarai"
      }
    },
    skillMatrix: [
      {
        category: "Core Backend",
        skills: ["FastAPI", "Python", "Go (Fundamentals)", "REST/GraphQL", "gRPC"]
      },
      {
        category: "AI & Data",
        skills: ["RAG Architecture", "LLMOps", "Vector DBs", "LangChain/Agno", "Embeddings"]
      },
      {
        category: "Infrastructure",
        skills: ["Redis Cluster", "PostgreSQL", "Kafka/RabbitMQ", "Docker", "Nginx"]
      }
    ],
    topology: {
      title: "Standard GenAI Pipeline",
      nodes: [
        { id: "API", label: "FastAPI Gateway", status: "Active" },
        { id: "ORC", label: "Central Orchestrator", status: "Active" },
        { id: "KV", label: "Redis Cache", status: "Synced" },
        { id: "VDB", label: "Vector Database", status: "Searching" },
        { id: "LLM", label: "Gemini/OpenAI", status: "Streaming" }
      ],
      connections: [
        ["API", "ORC"], ["ORC", "KV"], ["ORC", "VDB"], ["VDB", "LLM"], ["LLM", "ORC"]
      ]
    },
    questLog: [
      {
        period: "Oct 2024 - Present",
        role: "Software Developer",
        company: "Endpoint IT Services",
        achievements: [
          "Architected MeetMemo: Autonomous AI meeting recorder",
          "Built Novo Chat: Conversational movie RAG system",
          "Scaled FastAPI pipelines for extreme concurrency",
          "Integrated Multi-Agent workflows for code analysis"
        ]
      },
      {
        period: "Jun 2022 - May 2024",
        role: "Software Developer",
        company: "Adansa Solutions",
        achievements: [
          "Engineered robust ETL data pipelines using Pandas/NumPy",
          "Optimized legacy backend codebases for 40% speed boost",
          "Built Flask-based microservices for enterprise clients"
        ]
      }
    ],
    inventory: [
      {
        name: "Archaea",
        type: "AI Code Search",
        rarity: "Mythic",
        stack: ["FastAPI", "OpenSearch", "AST Parsing"],
        description: "Natural language search engine for enterprise repositories using semantic mapping."
      },
      {
        name: "MeetMemo",
        type: "Meeting Agent",
        rarity: "Legendary",
        stack: ["Python", "Generative AI", "WebSockets"],
        description: "Autonomous browser agents for real-time meeting capture and analysis."
      }
    ]
  });
}
