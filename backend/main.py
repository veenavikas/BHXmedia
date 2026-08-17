import os
import json
import logging
from fastapi import FastAPI, HTTPException, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("bhx-backend")

app = FastAPI(
    title="BHX Media Quality-Brain Backend",
    description="FastAPI service for contact form handling and work management for BHX Media",
    version="1.0.0"
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactFormSubmission(BaseModel):
    name: str
    company: Optional[str] = None
    phone: Optional[str] = None
    email: EmailStr
    message: str
    b_hp_check: Optional[str] = None  # Honeypot field for bot prevention

class WorkItem(BaseModel):
    title: str
    format: str
    url: str
    thumbnail: Optional[str] = None
    client: Optional[str] = None
    result: Optional[str] = None

def send_email_notification(name: str, email: str, message: str, company: Optional[str] = None, phone: Optional[str] = None):
    """
    Background worker function to forward contact submissions to bharath@bhxmedia.com.
    """
    logger.info(f"Notification queued for Bharath C.S. <bharath@bhxmedia.com> from {name} <{email}> (Company: {company}, Phone: {phone})")
    # In production, SMTP or email service provider API (SendGrid, SES, Mailgun) is triggered here.
    logger.info(f"Message content: {message}")

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "bhx-backend"}

@app.post("/api/contact")
async def handle_contact(submission: ContactFormSubmission, background_tasks: BackgroundTasks):
    # Honeypot check
    if submission.b_hp_check:
        logger.warning(f"Bot detected via honeypot field from IP: {submission.email}")
        return {"status": "success", "message": "Inquiry received."}

    if not submission.name or not submission.message:
        raise HTTPException(status_code=400, detail="Name and message are required.")

    # Schedule email dispatch in background
    background_tasks.add_task(
        send_email_notification,
        name=submission.name,
        email=submission.email,
        message=submission.message,
        company=submission.company,
        phone=submission.phone
    )

    return {
        "status": "success",
        "message": "Thank you for reaching out to BHX Media. Your inquiry has been sent to bharath@bhxmedia.com."
    }

@app.post("/api/work")
async def add_work_item(item: WorkItem):
    """
    Phase 2 API to add new work items directly to work.json
    """
    work_file_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "work.json")
    
    try:
        if os.path.exists(work_file_path):
            with open(work_file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
        else:
            data = []

        new_entry = {
            "id": f"work-{len(data) + 1}",
            "title": item.title,
            "format": item.format,
            "url": item.url,
            "thumbnail": item.thumbnail,
            "client": item.client,
            "result": item.result
        }

        data.append(new_entry)

        with open(work_file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)

        return {"status": "success", "item": new_entry}
    except Exception as e:
        logger.error(f"Failed to write work item: {e}")
        raise HTTPException(status_code=500, detail="Failed to save work item.")
