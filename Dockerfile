# ---------- base ----------
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json tsconfig.json ./

# ---------- dev (has devDeps like nodemon) ----------
FROM base AS dev
RUN npm install
COPY . .
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---------- prod (no devDeps) ----------
FROM base AS prod
RUN npm ci --omit=dev
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/index.js"]
