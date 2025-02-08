import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    base: "/react-homework/",
    plugins: [
      react({
        jsxRuntime: "automatic",
        babel: {
          plugins: [
            [
              "@locator/babel-jsx/dist",
              {
                env: "development",
              },
            ],
          ],
        },
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: "localhost",
      port: 4000,
    },
  };
});
