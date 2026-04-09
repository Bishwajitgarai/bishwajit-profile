from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

@app.get("/api/profile")
def get_profile():
    return {
        "name": "Bishwajit Garai",
        "title": "Backend Developer | GenAI & RAG Architect",
        "email": "bishwajitgarai2520@gmail.com",
        "location": "Mumbai, India",
        "experience": 3.5,
        "skills": [
            "Python", "FastAPI", "GenAI", "RAG", "Next.js", "Redis", "Vector DBs"
        ],
        "projects": ["Archaea", "Novo Chat", "MeetMemo"]
    }

@app.get("/api/health")
def health_check():
    return JSONResponse(content={"status": "online", "message": "FastAPI is running!"})
