import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  build: {
    // fix issue with build for amplify
    rollupOptions: {
      external: ["@aws-amplify/backend", "@aws-amplify/backend-cli"],
    },
  },
});
