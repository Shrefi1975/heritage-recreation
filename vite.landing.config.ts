import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  define: {
    "import.meta.env.VITE_STANDALONE": JSON.stringify("true"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-landing",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "real-estate-rental": path.resolve(__dirname, "real-estate-rental.html"),
        "car-rental": path.resolve(__dirname, "car-rental.html"),
        "heavy-equipment-rental": path.resolve(__dirname, "heavy-equipment-rental.html"),
        "transport-cameroon-chad": path.resolve(__dirname, "transport-cameroon-chad.html"),
        "security-systems": path.resolve(__dirname, "security-systems.html"),
        "construction-contracting": path.resolve(__dirname, "construction-contracting.html"),
        "links": path.resolve(__dirname, "links.html"),
      },
      output: {
        entryFileNames: (chunk) => {
          const name = chunk.name;
          if (['real-estate-rental','car-rental','heavy-equipment-rental','transport-cameroon-chad','security-systems','construction-contracting','links'].includes(name)) {
            return `assets/[name]/[name]-[hash].js`;
          }
          return `assets/[name]-[hash].js`;
        },
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || '';
          if (/\.(css)$/i.test(info)) {
            return `assets/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(info)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
