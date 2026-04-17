import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        drivingRange: resolve(__dirname, "driving-range.html"),
        lessons: resolve(__dirname, "lessons.html"),
        toptracer: resolve(__dirname, "toptracer.html"),
        clubFittings: resolve(__dirname, "club-fittings.html"),
        clubRepairs: resolve(__dirname, "club-repairs.html"),
        miniGolf: resolve(__dirname, "mini-golf.html"),
      },
    },
  },
});
