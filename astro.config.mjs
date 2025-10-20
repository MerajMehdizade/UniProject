import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(),tailwindcss()],
  output: "static",
  base: "/UniProject/",
  site: "https://MerajMehdizade.github.io",
});
