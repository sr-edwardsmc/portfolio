import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer({ open: true, filename: "dist/stats.html" })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three"))
              return "vendor-three";
            if (id.includes("framer-motion")) return "vendor-framer";
            return "vendor";
          }
        },
      },
    },
  },
});
