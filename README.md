# MCP-WebApplication

Minimal TypeScript Express app with logging, CORS, and API integration.

## Features

- **Express** - Web framework
- **Morgan** - Request logging  
- **CORS** - Cross-origin support
- **Dotenv** - Environment config
- **Axios** - HTTP client

## Setup

```bash
pnpm install
echo "PORT=4000" > .env  # Optional
npm run dev
```

## Endpoints

- `GET /` - Hello page
- `GET /quote` - Random quote JSON

## Scripts

- `npm run dev` - Development
- `npm run build` - Build TypeScript  
- `npm start` - Production

## License

MIT
