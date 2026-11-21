import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
  site: "https://fwp.or.id",
  output: "server",
  adapter: cloudflare(),
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto", coalesce: true }),
      storage: r2({ binding: "MEDIA" }),
      admin: {
        siteName: "FWP Redaksi & CMS",
        logo: "/logo.png",
        favicon: "/favicon.png",
        footerLabel: "Forum Wakaf Produktif",
      },
    }),
  ],
  devToolbar: { enabled: false },
});
