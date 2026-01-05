import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  resolve: {
    alias: {
      three: new URL("./node_modules/three", import.meta.url).pathname,
    },
  },
  plugins: [react(), visualizer({ open: true, filename: "dist/stats.html" })],
  build: {
    rollupOptions: {
      external: ["three"],
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
