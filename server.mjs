import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// 1. Servir archivos estáticos de la build de Vite
app.use(express.static(distDir));

// 2. Fallback SPA: cualquier ruta no estática sirve index.html
//    (necesario para que /tienda, /blog/..., etc. funcionen al recargar)
app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌿 Herbolario Raíz sirviendo en http://localhost:${PORT}`);
});
