import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nysominea.github.io",
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "km",
        locales: {
          km: "km-KH",
          en: "en-US",
        },
      },
    }),
    icon(),
  ],
});
