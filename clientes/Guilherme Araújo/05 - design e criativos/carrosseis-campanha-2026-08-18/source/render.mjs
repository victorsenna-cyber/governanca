import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const sharp = require("sharp");

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(sourceDir, "..");
const outputDir = path.join(projectDir, "exports");
const requested = process.argv.slice(2).map(value => value.toUpperCase());

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ["--allow-file-access-from-files", "--font-render-hinting=none"]
});

const page = await browser.newPage({
  viewport: { width: 2280, height: 1500 },
  deviceScaleFactor: 1
});

await page.goto(pathToFileURL(path.join(sourceDir, "index.html")).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const ids = await page.locator(".card").evaluateAll(nodes => nodes.map(node => node.dataset.id));
const selected = ids.filter(id => requested.length === 0 || requested.includes(id.slice(0, 3)));

for (const id of selected) {
  const setId = id.slice(0, 3);
  const setDir = path.join(outputDir, setId);
  await fs.mkdir(setDir, { recursive: true });
  const card = page.locator(`.card[data-id="${id}"]`);
  await card.screenshot({
    path: path.join(setDir, `${id}.png`),
    type: "png",
    animations: "disabled"
  });
}

const sets = [...new Set(selected.map(id => id.slice(0, 3)))];

for (const setId of sets) {
  const setDir = path.join(outputDir, setId);
  const files = (await fs.readdir(setDir))
    .filter(file => /^C\d{2}-\d{2}\.png$/.test(file))
    .sort();

  const thumbWidth = 250;
  const thumbHeight = 313;
  const gap = 16;
  const margin = 24;
  const width = margin * 2 + thumbWidth * 4 + gap * 3;
  const height = margin * 2 + thumbHeight * 2 + gap;
  const composites = [];

  for (let i = 0; i < files.length; i += 1) {
    const input = await sharp(path.join(setDir, files[i]))
      .resize(thumbWidth, thumbHeight, { fit: "fill" })
      .png()
      .toBuffer();
    composites.push({
      input,
      left: margin + (i % 4) * (thumbWidth + gap),
      top: margin + Math.floor(i / 4) * (thumbHeight + gap)
    });
  }

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: "#1b211d"
    }
  })
    .composite(composites)
    .png()
    .toFile(path.join(setDir, `${setId}-contato.png`));
}

const overviewSets = ["C01", "C02", "C03", "C04", "C05", "C06"];
const overviewFiles = [];

for (const setId of overviewSets) {
  const contactSheet = path.join(outputDir, setId, `${setId}-contato.png`);
  try {
    await fs.access(contactSheet);
    overviewFiles.push({ setId, contactSheet });
  } catch {
    // A visao geral e criada assim que os seis conjuntos estiverem disponiveis.
  }
}

if (overviewFiles.length === overviewSets.length) {
  const sheetWidth = 720;
  const sheetHeight = 453;
  const gap = 28;
  const margin = 36;
  const width = margin * 2 + sheetWidth * 2 + gap;
  const height = margin * 2 + sheetHeight * 3 + gap * 2;
  const composites = [];

  for (let i = 0; i < overviewFiles.length; i += 1) {
    const input = await sharp(overviewFiles[i].contactSheet)
      .resize(sheetWidth, sheetHeight, { fit: "fill" })
      .png()
      .toBuffer();
    composites.push({
      input,
      left: margin + (i % 2) * (sheetWidth + gap),
      top: margin + Math.floor(i / 2) * (sheetHeight + gap)
    });
  }

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: "#111713"
    }
  })
    .composite(composites)
    .png()
    .toFile(path.join(outputDir, "visao-geral-C01-C06.png"));
}

await browser.close();

console.log(JSON.stringify({ rendered: selected.length, sets, outputDir }, null, 2));
