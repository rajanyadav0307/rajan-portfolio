import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT:
// - When deploying to GitHub Pages, set `base` to "/<repo-name>/"
// - For local dev, base doesn't matter.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES_BASE ?? "/",
});
