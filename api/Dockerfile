# --- Base ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# --- Développement (hot reload) ---
FROM base AS dev
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# --- Build de production ---
FROM base AS build
RUN npm install
COPY . .
RUN npm run build

# --- Image de production ---
FROM node:20-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]
