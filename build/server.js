"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
const helperLogger = __importStar(require("helper-logger"));
// Create a simple log wrapper using helper-logger
const log = (message, ...args) => {
    helperLogger.info(`${message}${args.length > 0 ? ' ' + args.join(' ') : ''}`);
};
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// ────── Middlewares ──────
app.use((0, morgan_1.default)("dev")); // HTTP request logger
app.use((0, cors_1.default)()); // Enable Cross‑Origin Resource Sharing
// ────── Routes ──────
app.get("/", (_, res) => {
    log("Home route accessed");
    res.send(`<h1>Hello, TypeScript World! 🚀</h1>
     <p>Try the <code>/quote</code> endpoint for a random quote.</p>`);
});
// Example route that consumes a public API using axios
app.get("/quote", async (_, res) => {
    try {
        log("Fetching random quote from API");
        const { data } = await axios_1.default.get("https://api.quotable.io/random");
        log("Successfully fetched quote");
        res.json({ quote: data.content, author: data.author });
    }
    catch (error) {
        log("Failed to fetch quote:", error);
        res.status(500).json({ error: "Could not fetch quote" });
    }
});
// ────── Start server ──────
app.listen(PORT, () => {
    log(`Server running at http://localhost:${PORT}`);
    log("Hello");
});
