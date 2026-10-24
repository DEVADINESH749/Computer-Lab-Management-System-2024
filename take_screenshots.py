from playwright.sync_api import sync_playwright
from pathlib import Path

BASE_URL = "http://127.0.0.1:8000"
SCREENSHOT_DIR = Path("screenshots")
SCREENSHOT_DIR.mkdir(exist_ok=True)

pages = [
    ("01-home.png", "/"),
    ("02-staff-login.png", "/stlogin"),
    ("03-staff-register.png", "/streg"),
    ("04-details.png", "/details"),
    ("05-bca-seats.png", "/seatbca"),
    ("06-bsc-seats.png", "/seatbsc"),
    ("07-mscit-seats.png", "/seatmscit"),
    ("08-mphill.png", "/mphill"),
    ("09-contact.png", "/contact"),
    ("10-feedback.png", "/feedback"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    for filename, path in pages:
        try:
            response = page.goto(BASE_URL + path, wait_until="networkidle", timeout=15000)
            page.screenshot(path=str(SCREENSHOT_DIR / filename), full_page=True)
            print(f"OK: {filename}  ->  {response.status if response else 'No response'}")
        except Exception as e:
            print(f"FAILED: {filename} -> {e}")

    browser.close()

print("Screenshot capture completed.")
