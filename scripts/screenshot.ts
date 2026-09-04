import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";

const PORT = 5183;
const URL = `http://localhost:${PORT}`;
const OUT_DIR = process.env.SHOTS_DIR || path.resolve("scratchpad-shots");

mkdirSync(OUT_DIR, { recursive: true });

function waitForServer(url: string, timeoutMs = 30000): Promise<void> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status === 404) return resolve();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("dev server timeout"));
      setTimeout(tick, 400);
    };
    tick();
  });
}

async function main() {
  const dev = spawn("npx", ["vite", "--port", String(PORT), "--strictPort"], {
    shell: true,
    stdio: "pipe",
  });

  try {
    await waitForServer(URL);

    const browser = await chromium.launch();

    // Desktop pass
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktopPage.goto(URL, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(600);

    await desktopPage.mouse.move(400, 300);
    await desktopPage.waitForTimeout(300);
    await desktopPage.mouse.move(900, 500, { steps: 20 });
    await desktopPage.waitForTimeout(300);
    await desktopPage.screenshot({ path: path.join(OUT_DIR, "desktop-cursor.png") });

    const scrollHeight = await desktopPage.evaluate(() => document.body.scrollHeight);
    for (const frac of [0, 0.33, 0.66, 1]) {
      await desktopPage.evaluate((y) => window.scrollTo(0, y), Math.floor(scrollHeight * frac));
      await desktopPage.waitForTimeout(500);
      await desktopPage.screenshot({ path: path.join(OUT_DIR, `desktop-scroll-${Math.round(frac * 100)}.png`) });
    }

    // Expand project manifest rows by clicking through the UI
    await desktopPage.goto(URL, { waitUntil: "networkidle" });
    await desktopPage.locator('a[href="#projects"]').click();
    await desktopPage.waitForTimeout(800);

    const expandFor = async (projectName: string, fileName: string) => {
      const row = desktopPage.locator("h3", { hasText: projectName }).last();
      await row.scrollIntoViewIfNeeded();
      await row.click();
      await desktopPage.waitForTimeout(1200);
      await desktopPage.screenshot({ path: path.join(OUT_DIR, fileName) });
      await row.click();
      await desktopPage.waitForTimeout(300);
    };

    await expandFor("HST Risk", "desktop-hst-risk-expanded.png");
    await expandFor("HST Jumanji", "desktop-hst-jumanji-expanded.png");

    await desktopPage.close();

    // Mobile pass
    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobilePage.goto(URL, { waitUntil: "networkidle" });
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({ path: path.join(OUT_DIR, "mobile-home.png") });

    const mobileHeight = await mobilePage.evaluate(() => document.body.scrollHeight);
    await mobilePage.evaluate((y) => window.scrollTo(0, y), Math.floor(mobileHeight * 0.5));
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(OUT_DIR, "mobile-mid.png") });

    await mobilePage.close();

    await browser.close();
    console.log("Screenshots saved to", OUT_DIR);
  } finally {
    dev.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
