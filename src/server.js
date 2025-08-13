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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var axios_1 = require("axios");
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
// ────── Middlewares ──────
app.use((0, morgan_1.default)("dev")); // HTTP request logger
app.use((0, cors_1.default)()); // Enable Cross‑Origin Resource Sharing
// ────── Routes ──────
app.get("/", function (_, res) {
    log("Home route accessed");
    res.send("<h1>Hello, TypeScript World! \uD83D\uDE80</h1>\n     <p>Try the <code>/quote</code> endpoint for a random quote.</p>");
});
// Example route that consumes a public API using axios
app.get("/quote", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                log("Fetching random quote from API");
                return [4 /*yield*/, axios_1.default.get("https://api.quotable.io/random")];
            case 1:
                data = (_a.sent()).data;
                log("Successfully fetched quote");
                res.json({ quote: data.content, author: data.author });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                log("Failed to fetch quote:", error_1);
                res.status(500).json({ error: "Could not fetch quote" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ────── Start server ──────
app.listen(PORT, function () {
    log("Server running at http://localhost:".concat(PORT));
    log("Hello");
});
