# MCP-WebApplication

Minimal TypeScript Express app with logging, CORS, and API integration.

## Quick Start

```bash
npm install
npm run dev
```

## Features

- Express + TypeScript
- Logging (Morgan & helper-logger)
- CORS support
- Environment config
- HTTP client (Axios)

## Endpoints

- `GET /` - Hello page
- `GET /quote` - Random quote

## Usage

Import helper-logger for enhanced logging:

```typescript
import { log } from 'helper-logger';
log('Hello');
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Compile TypeScript  
- `npm start` - Production server

## License

MIT
