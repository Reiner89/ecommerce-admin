import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import terser from "@rollup/plugin-terser";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // Compresión con Brotli y Gzip
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    // Análisis del bundle
    visualizer({
      filename: "./dist/stats.html",
      open: false, // Cambia a true si quieres abrir el análisis automáticamente
    }),
  ],
  build: {
    sourcemap: process.env.NODE_ENV !== "production", // Desactiva sourcemaps en producción
    chunkSizeWarningLimit: 3000, // Ajuste del límite para monitorear mejor el tamaño
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lodash")) return "lodash";
            if (id.includes("moment")) return "moment";
            return "vendor";
          }
          if (id.includes("src/components")) return "components";
          if (id.includes("src/pages")) return "pages";
          if (id.includes("src/utils")) return "utils";
          return "app";
        },
      },
      plugins: [
        terser({
          compress: {
            drop_console: true,
          },
        }),
      ],
    },
    target: "es2015",
  },
});
