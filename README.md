# MCP-WebApplication

Minimal TypeScript Express app with logging, CORS, and API integration.

## Features

- Express web framework with TypeScript
- Request logging (Morgan) and CORS support
- Environment configuration and HTTP client (Axios)

## Quick Start

```bash
npm install
echo "PORT=4000" > .env  # Optional
npm run dev
```

## API Endpoints

- `GET /` - Hello page
- `GET /quote` - Random quote JSON

## Scripts

- `npm run dev` - Development server
- `npm run build` - Build TypeScript
- `npm start` - Production server

## License

MIT
