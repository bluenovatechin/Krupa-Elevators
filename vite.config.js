import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL ?? "/Krupa-Elevators/",
  server: {
    port: 3000,
    open: false,
  },
});
