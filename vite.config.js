import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_BASE_URL ?? "/KrupaElevator/";

export default defineConfig({
  plugins: [react()],
  // base,
  base: "/Krupa-Elevators/",
  server: {
    port: 3000,
    open: false,
  },
});
