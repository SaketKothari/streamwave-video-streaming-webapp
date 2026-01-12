import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - split large dependencies
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-redux": ["@reduxjs/toolkit", "react-redux"],
          "vendor-clerk": ["@clerk/clerk-react"],
          "vendor-player": ["react-player"],
          "vendor-ui": ["framer-motion", "react-icons"],
          "vendor-utils": ["axios", "moment"],
        },
      },
    },
  },
});
