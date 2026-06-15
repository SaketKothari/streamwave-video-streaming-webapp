import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-dom") || id.includes("react-router-dom")) return "vendor-react";
          if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) return "vendor-redux";
          if (id.includes("@clerk/clerk-react")) return "vendor-clerk";
          if (id.includes("react-player")) return "vendor-player";
          if (id.includes("framer-motion") || id.includes("react-icons")) return "vendor-ui";
          if (id.includes("axios") || id.includes("moment")) return "vendor-utils";
          if (id.includes("node_modules/react/")) return "vendor-react";
        },
      },
    },
  },
});
