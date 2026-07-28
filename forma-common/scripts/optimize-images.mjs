import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "source-assets", "original-png");
const outputRoot = path.join(root, "public", "assets");

async function optimizeDirectory(relativeDirectory) {
  const sourceDirectory = path.join(sourceRoot, relativeDirectory);
  const outputDirectory = path.join(outputRoot, relativeDirectory);
  await mkdir(outputDirectory, { recursive: true });

  const files = await readdir(sourceDirectory);
  const pngFiles = files.filter((file) => file.toLowerCase().endsWith(".png"));

  await Promise.all(
    pngFiles.map(async (file) => {
      const source = path.join(sourceDirectory, file);
      const output = path.join(
        outputDirectory,
        file.replace(/\.png$/i, ".webp"),
      );

      await sharp(source)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 84, effort: 5, smartSubsample: true })
        .toFile(output);

      console.log(`${relativeDirectory}/${path.basename(output)}`);
    }),
  );
}

await Promise.all([optimizeDirectory("work"), optimizeDirectory("about")]);
