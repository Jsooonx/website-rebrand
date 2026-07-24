import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsDirectory = path.join(projectRoot, "public", "assets");
const sourceDirectory = path.join(projectRoot, "source-assets", "original-png");

const assets = [
  ["kindling-good-weather-press.png", "kindling-good-weather-press.webp", 1024],
  ["kindling-kasa-house.png", "kindling-kasa-house.webp", 1024],
  ["kindling-kopi-sore.png", "kindling-kopi-sore.webp", 1024],
  ["kindling-lumen-soda.png", "kindling-lumen-soda.webp", 1024],
  ["kindling-radio-kecil.png", "kindling-radio-kecil.webp", 1024],
  ["kindling-services-gradient.png", "kindling-services-gradient.webp", 1600],
  ["kindling-studio-poster.png", "kindling-studio-poster.webp", 1440],
  ["kindling-testimonial-maya.png", "kindling-testimonial-maya.webp", 1000],
  ["kindling-mark.png", "kindling-mark.webp", 256],
];

for (const [inputName, outputName, width] of assets) {
  const inputPath = path.join(sourceDirectory, inputName);
  const outputPath = path.join(assetsDirectory, outputName);

  await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: outputName === "kindling-mark.webp" ? 90 : 82, effort: 6 })
    .toFile(outputPath);

  console.log(`Optimized ${inputName} -> ${outputName}`);
}
