import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    identity: {
      name: "Bishwajit Garai",
      title: "Python Backend Developer | GenAI & LLM Ops Specialist | RAG Architect",
      summary: "Python Backend Developer with 4+ years of experience building scalable, production-grade backend systems and GenAI-powered applications. Specialized in FastAPI, Flask, LLMOps, RAG architectures, autonomous agents, AI chatbots, and hybrid search systems using OpenSearch, Vespa, and Vector DBs. Strong background in microservices, async processing, Redis, and cloud-ready deployments.",
      class: "System Designer",
      level: "4+ Years Experience",
      location: "Kolkata, WB, India, 721253",
      email: "bishwajitgarai2520@gmail.com",
      phone: "+91 9547066044",
      contact: {
        email: "bishwajitgarai2520@gmail.com",
        githubPrimary: "Bishwajitgarai",
        githubOthers: ["Bishwajit-garai", "bishwajit-archaea"],
        linkedin: "bishwajitgarai"
      }
    },
    skillMatrix: [
      {
        category: "Languages & Backend",
        skills: ["Python", "FastAPI", "Django", "Flask", "Kafka", "Redis", "RabbitMQ", "WebSockets"]
      },
      {
        category: "GenAI & LLM",
        skills: ["Multi-Agent Orchestration", "RAG Architectures", "Function Calling", "Semantic Cache", "LLM Ops", "Fine-tuning", "Gemini / OpenAI"]
      },
      {
        category: "Search & Data",
        skills: ["OpenSearch", "Vespa", "Vector DB", "Hybrid Search", "MySQL", "Redis", "PostgreSQL", "Elasticsearch"]
      },
      {
        category: "Infra & DevOps",
        skills: ["Docker", "Nginx", "AWS", "CI/CD", "Async Workers"]
      },
      {
        category: "Others",
        skills: ["Web Scraping", "Automation", "Unit Testing (Pytest)", "React", "Next.js", "TypeScript"]
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
      },
      {
        period: "Sep 2021 - Feb 2022",
        role: "Junior Software Developer",
        company: "Aiinhome Technology Pvt Ltd",
        location: "Kolkata",
        achievements: [
          "Developed a Django-based system for high-volume Excel validation and upload.",
          "Enhanced software reliability by 40% and reduced detected bugs by 60%.",
          "Followed clean coding patterns and best practices to improve maintainability."
        ]
      }
    ],
    education: [
      {
        degree: "B.Tech | Computer Science and Engineering",
        institution: "Mallabhum Institute of Technology, Bankura, WB",
        period: "June 2020 - July 2023",
        score: "CGPA: 83.7"
      },
      {
        degree: "Diploma of Higher Education | Computer Science",
        institution: "Raja Ranjit Kishore Govt Polytechnic, Jhargram, WB",
        period: "June 2017 - June 2020",
        score: "CGPA: 77.6"
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
        type: "Movie Chat Agent",
        rarity: "Legendary",
        stack: ["Python", "FastAPI", "MySQL", "Agno", "RAG"],
        description: "GenAI-powered conversational system for natural-language movie search, recommendations, and contextual Q&A."
      },
      {
        name: "MeetMemo",
        type: "Meeting Assistant",
        rarity: "Legendary",
        stack: ["Python", "FastAPI", "Generative AI", "MySQL"],
        description: "AI-powered meeting assistant with autonomous browser agents for real-time capture, transcription, and summarization."
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
        stack: ["Flask", "Pandas", "MySQL", "Jinja"],
        description: "Calculates commissions for insurance providers and agents via a user-friendly executable interface."
      },
      {
        name: "Tally Migration Tool",
        type: "Migration System",
        rarity: "Rare",
        stack: ["Python", "Automation"],
        description: "Specialized tool for automated data migration into Tally systems."
      },
      {
        name: "Simplified Excel Upload",
        type: "High-Volume Data Utility",
        rarity: "Epic",
        stack: ["Python", "Pandas", "Flask", "Calamine"],
        description: "Optimized pipeline handling massive customer datasets, reducing processing time by 40%."
      },
      {
        name: "Fixed Asset Depreciation",
        type: "Financial Management",
        rarity: "Epic",
        stack: ["Python", "Flask", "React"],
        description: "Manages fixed asset information, calculating annual depreciation based on predefined rules."
      },
      {
        name: "Other Systems",
        type: "Utility Suite",
        rarity: "Rare",
        stack: ["TallyTool", "Misreport", "Postworld"],
        description: "Reporting tools, automated data extraction utilities, and digital mailing systems."
      }
    ]
  });
}
