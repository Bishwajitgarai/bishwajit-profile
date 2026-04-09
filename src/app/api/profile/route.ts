import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    identity: {
      name: "Bishwajit Garai",
      title: "Python Backend Developer | GenAI & LLM Ops Specialist | RAG Architect",
      summary: "Python Backend Developer with 3.5+ years of experience building scalable, production-grade backend systems and GenAI-powered applications. Specialized in FastAPI, Flask, LLMOps, RAG architectures, autonomous agents, AI chatbots, and hybrid search systems using OpenSearch, Vespa, and Vector DBs. Strong background in microservices, async processing, Redis, and cloud-ready deployments.",
      class: "System Designer",
      level: "3.5+ Years Experience",
      location: "Kolkata, WB, India, 721253",
      email: "bishwajitgarai2520@gmail.com",
      phone: "+91 9547066044",
      contact: {
        email: "bishwajitgarai2520@gmail.com",
        github: "Bishwajit-garai",
        linkedin: "bishwajitgarai"
      }
    },
    skillMatrix: [
      {
        category: "Languages & Backend",
        skills: ["Python", "FastAPI", "Django", "Flask", "REST", "GraphQL", "WebSockets"]
      },
      {
        category: "GenAI & LLM",
        skills: ["Gemini", "OpenAI", "RAG", "Prompt Engineering", "Autonomous Agents", "AI Chatbots", "LLM Ops"]
      },
      {
        category: "Search & Data",
        skills: ["OpenSearch", "Vespa", "Vector DB", "Hybrid Search", "MySQL", "SQLite", "Redis", "Pandas", "NumPy"]
      },
      {
        category: "Infra & DevOps",
        skills: ["Docker", "Nginx", "AWS", "Git", "CI/CD", "Async Workers"]
      },
      {
        category: "Others",
        skills: ["Web Scraping", "Automation", "Unit Testing", "React", "JavaScript"]
      }
    ],
    topology: {
      title: "Backend Architecture Stack",
      nodes: [
        { id: "API", label: "FastAPI / Flask", status: "Active" },
        { id: "LLM", label: "LLM Ops (Gemini/OpenAI)", status: "Active" },
        { id: "RAG", label: "RAG / Vector DB", status: "Synced" },
        { id: "DB", label: "MySQL / Redis", status: "Active" },
        { id: "INF", label: "Docker / Nginx", status: "Active" }
      ]
    },
    questLog: [
      {
        period: "Oct 2024 – Current",
        role: "Software Developer",
        company: "Endpoint It Services Pvt Ltd",
        location: "Mumbai",
        achievements: [
          "Leading backend and GenAI development for multiple AI products including MeetMemo, Novo Chat, and Archaea.",
          "Built AI systems for real-time meeting capture, movie recommendations, code search, and podcast moment extraction.",
          "Implemented scalable async pipelines and backend services for high-concurrency, low-latency processing."
        ]
      },
      {
        period: "June 2022 - May 2024",
        role: "Software Developer",
        company: "Adansa Solutions Pvt Ltd",
        location: "Kolkata",
        achievements: [
          "Led development of Flask-based web applications with robust backend systems.",
          "Utilized Pandas, Numpy for efficient ETL processes, ensuring smooth data transformation.",
          "Collaborated with cross-functional teams to optimize system performance and data workflows."
        ]
      }
    ],
    inventory: [
      {
        name: "Archaea",
        type: "Code Search Engine",
        rarity: "Mythic",
        stack: ["Python", "FastAPI", "OpenSearch", "Embeddings"],
        description: "Sophisticated AI Code Search Engine for querying massive repositories using natural language."
      },
      {
        name: "Novo Chat",
        type: "Chat Agent",
        rarity: "Legendary",
        stack: ["Python", "FastAPI", "MySQL", "Agno", "RAG"],
        description: "GenAI-powered movie query and recommendation system with conversational flow."
      },
      {
        name: "MeetMemo",
        type: "Meeting Assistant",
        rarity: "Legendary",
        stack: ["Python", "FastAPI", "Generative AI", "MySQL"],
        description: "AI assistant for tracking, transcribing, and analyzing web meetings using autonomous agents."
      },
      {
        name: "Payroll Management",
        type: "System",
        rarity: "Epic",
        stack: ["Python", "Django", "MySQL"],
        description: "Comprehensive payroll system for employee lifecycle and financial management."
      },
      {
        name: "Saferisk",
        type: "Insurance Analytics",
        rarity: "Epic",
        stack: ["Python", "Flask", "Pandas"],
        description: "Analytics tool for insurance risk assessment and data visualization."
      },
      {
        name: "Tally Migration",
        type: "Migration Tool",
        rarity: "Rare",
        stack: ["Python", "Automation"],
        description: "Specialized tool for automated data migration into Tally systems."
      },
      {
        name: "Simplified Excel",
        type: "Utility",
        rarity: "Rare",
        stack: ["Python", "Pandas", "NumPy"],
        description: "Advanced utility for large-scale data transformation and Excel automation."
      }
    ]
  });
}
