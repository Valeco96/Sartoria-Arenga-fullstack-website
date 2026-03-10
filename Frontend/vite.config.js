import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Sartoria-Arenga-fullstack-website/",
  plugins: [react()],
});
