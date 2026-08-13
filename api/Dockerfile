# --- Base ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
# Le schéma doit être présent AVANT npm install (le postinstall lance "prisma generate")
COPY prisma ./prisma

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
COPY prisma ./prisma
# --ignore-scripts : pas de "prisma generate" ici (la CLI est en devDependency).
# On récupère le client déjà généré depuis l'étape build.
RUN npm install --omit=dev --ignore-scripts
COPY --from=build /app/dist ./dist
COPY --from=build /app/generated ./generated
EXPOSE 3000
CMD ["node", "dist/src/main"]
