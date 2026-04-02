from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(500)

    # Click the "Fight Boss" button
    page.locator("#viaje-boss").click()
    page.wait_for_timeout(500)

    # The user should be prompted for a name
    page.on("dialog", lambda dialog: dialog.accept("Bolt"))

    # Click the boss image repeatedly
    boss = page.locator("#boss")
    for _ in range(5):
        boss.click()
        page.wait_for_timeout(200)

    # Take screenshot at the key moment
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

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
            context.close()
            browser.close()