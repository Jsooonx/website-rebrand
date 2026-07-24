import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "unframer", "framer-motion"],
    alias: {
      "@reference-export": fileURLToPath(
        new URL("../framer-export/src/exports/das-studio", import.meta.url),
      ),
    },
  },
  server: {
    fs: {
      allow: [fileURLToPath(new URL("..", import.meta.url))],
    },
  },
});
