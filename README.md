# MCP-WebApplication

A minimal TypeScript web application built with Express, featuring environment configuration, request logging, CORS support, and external API integration.

## Features

- **Express** - Web framework
- **Morgan** - Request logging
- **CORS** - Cross-origin support
- **Dotenv** - Environment variables
- **Axios** - HTTP client
- **Helper-logger** - Enhanced logging

## Quick Start

```bash
# Install dependencies
pnpm install

# Optional: Set custom port
echo "PORT=4000" > .env

# Development
npx ts-node server.ts

# Production
npm run build && npm start
```

## Endpoints

- `GET /` - Hello page (HTML)
- `GET /quote` - Random quote (JSON)

Example response:
```json
{
  "quote": "Stay hungry. Stay foolish.",
  "author": "Steve Jobs"
}
```

## Scripts

```bash
npm run dev    # Development with ts-node
npm run build  # Compile TypeScript
npm start      # Run production build
```

## License

MIT
