import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # This is a static HTML site.
    file_url = f"file://{os.path.abspath('index.html')}"
    page.goto(file_url)
    page.wait_for_timeout(500)

    # Accept any prompt gracefully
    page.on("dialog", lambda dialog: dialog.accept("Test User"))

    # Need to click "Luchar" to go to the boss view
    # The UI is managed via z-index toggling in clicker.js, 'viaje-boss' is the fight nav
    page.locator("#viaje-boss").click(force=True)
    page.wait_for_timeout(1000)

    # Click the boss image repeatedly to verify DOM updates don't throw errors
    boss_img = page.locator("#boss")
    for _ in range(5):
        boss_img.click(force=True)
        page.wait_for_timeout(200)

    # Take screenshot at the key moment
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)  # Hold final state for the video

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()