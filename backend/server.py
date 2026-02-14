from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/api/health")
async def health():
    return {"status": "ok"}

# Serve images folder
images_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "images")
if os.path.exists(images_path):
    app.mount("/api/images", StaticFiles(directory=images_path), name="images")

@app.get("/api/portfolio")
async def portfolio():
    html_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "index.html")
    return FileResponse(html_path, media_type="text/html")
