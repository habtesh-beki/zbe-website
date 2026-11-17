import type { MetadataRoute } from "next";
import { SITE } from "@/data/content";

const allow = { allow: "/" } as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allow },
      { userAgent: "GPTBot", ...allow },
      { userAgent: "OAI-SearchBot", ...allow },
      { userAgent: "ChatGPT-User", ...allow },
      { userAgent: "Google-Extended", ...allow },
      { userAgent: "PerplexityBot", ...allow },
      { userAgent: "ClaudeBot", ...allow },
      { userAgent: "anthropic-ai", ...allow },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
