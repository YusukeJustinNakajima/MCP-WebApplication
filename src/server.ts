// server.ts
// A very simple TypeScript web application using Express and several popular
// third‑party modules. It demonstrates environment configuration, logging,
// CORS handling, and an outbound HTTP request.
//
// ────────────────────────────────────────────────────────────
//  Requirements (install with npm or pnpm):
//   express morgan cors dotenv axios helper-logger @types/express @types/node ts-node typescript
//
//  Run in dev mode:
//     npx ts-node server.ts
//
//  Build & run:
//     tsc && node build/server.js
// ────────────────────────────────────────────────────────────

import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { log } from "helper-logger";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// ────── Middlewares ──────
app.use(morgan("dev")); // HTTP request logger
app.use(cors());        // Enable Cross‑Origin Resource Sharing

// ────── Routes ──────
app.get("/", (_, res) => {
  res.send(
    `<h1>Hello, TypeScript World! 🚀</h1>
     <p>Try the <code>/quote</code> endpoint for a random quote.</p>`
  );
});

// Example route that consumes a public API using axios
app.get("/quote", async (_, res) => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    res.json({ quote: data.content, author: data.author });
  } catch (error) {
    log.error("Failed to fetch quote:", error);
    res.status(500).json({ error: "Could not fetch quote" });
  }
});

// ────── Start server ──────
app.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}`);
});
