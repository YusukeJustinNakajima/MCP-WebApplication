# MCP-WebApplication

A minimal web application written in **TypeScript** using **Express** and a handful of popular third‑party modules. It demonstrates:

* Environment variable handling with **dotenv**
* HTTP request logging via **morgan**
* CORS support through **cors** middleware
* External API consumption using **axios** (`/quote` endpoint)
* Enhanced logging with **helper-logger**

---

## ✨ Features

| Module          | Purpose                               |
| --------------- | ------------------------------------- |
| `express`       | Core web framework                    |
| `morgan`        | Dev‑friendly request logger           |
| `cors`          | Cross‑Origin Resource Sharing headers |
| `dotenv`        | Loads variables from `.env`           |
| `axios`         | Fetches data from external APIs       |
| `helper-logger` | Enhanced logging with TypeScript      |

---

## ⚙️  Setup

```bash
# 1. Install dependencies
pnpm install # or npm install

# 2. (Optional) create a .env file
echo "PORT=4000" > .env

# 3. Run in development mode
npx ts-node server.ts

# 4. Build & run production
npm run build   # tsc --outDir build
node build/server.js
```

### Example `.env`

```
PORT=8080
```

---

## 🔍 Endpoints

| Method | Path     | Description                 |
| ------ | -------- | --------------------------- |
| `GET`  | `/`      | Hello page (HTML)           |
| `GET`  | `/quote` | Returns random quote (JSON) |

Sample response from `/quote`:

```json
{
  "quote": "Stay hungry. Stay foolish.",
  "author": "Steve Jobs"
}
```

---

## 🛠 Scripts (in `package.json`)

```json
{
  "scripts": {
    "dev": "ts-node server.ts",
    "build": "tsc",
    "start": "node build/server.js"
  }
}
```

---

## 📂 Project Structure

```
root
├── server.ts       # Express app (TypeScript)
├── package.json
├── tsconfig.json   # TypeScript compiler options
└── README.md       # This file
```

---

## 📝 License

MIT
