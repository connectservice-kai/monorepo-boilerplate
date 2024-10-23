import type { Config } from "tailwindcss";
import shadcnConfig from "@repo/ui/config/tailwind.config.ts";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@repo/ui/components/**/*.{ts,tsx}",
  ],
  presets: [shadcnConfig],
};

export default config;
