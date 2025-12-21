import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const FIGMA_PREFIX = "figma:asset/";
const VIRTUAL_PREFIX = "\0figma-asset:";

export default defineConfig({
  base: "/projects/border-ai/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "figma-asset-resolver",
      resolveId(source) {
        if (source.startsWith(FIGMA_PREFIX)) {
          return VIRTUAL_PREFIX + source.slice(FIGMA_PREFIX.length);
        }
        return null;
      },
      load(id) {
        if (id.startsWith(VIRTUAL_PREFIX)) {
          const file = id.slice(VIRTUAL_PREFIX.length);
          return `export default ${JSON.stringify(`/figma-assets/${file}`)};`;
        }
        return null;
      },
    },
  ],
});
