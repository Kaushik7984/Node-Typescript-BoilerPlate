# 🚀 Express TypeScript Boilerplate

A clean and minimal **Express.js + TypeScript + Mongoose** boilerplate with structured folders and ready-to-use configuration — perfect for scalable API development.

---

## 📁 Folder Structure

```
project-root/
│
├── src/
│   ├── config/               # App configuration (DB)
│   ├── controllers/          # Route handlers
│   ├── models/               # Mongoose models
│   ├── routes/               # Route definitions
│   ├── middlewares/          # Express middlewares
│   ├── utils/                # Utility/helper functions
│   ├── types/                # Custom TypeScript types
│   ├── app.ts                # App setup
│   └── server.ts             # Entry point
│
├── .env                      # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚡ Quick Start

### Create a new project using the CLI:

```bash
npx create-node-type <project-name>
```
### Navigate into the project directory:
```bash
cd <project-name>
```
### Run the development server

```bash
npm run dev
```

---

## 🔧 Manual Setup (if starting from scratch)

```bash
mkdir -p src/{config,controllers,models,routes,middlewares,utils,types}

touch src/config/db.ts

touch src/config/env.ts

touch src/controllers/demo.controller.ts

touch src/models/demo.model.ts

touch src/routes/demo.routes.ts

touch src/routes/index.ts

touch src/middlewares/error.middleware.ts

touch src/types/demo.types.ts

touch src/types/express.d.ts

touch src/app.ts

touch src/server.ts

touch .env

touch .gitignore

touch README.md

npm init -y

npm install express mongoose dotenv

npm install -D typescript ts-node-dev @types/node @types/express @types/mongoose nodemon

npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --strict
```

---

## 💬 Feedback or Suggestions?

Feel free to open issues or PRs — contributions are welcome!
