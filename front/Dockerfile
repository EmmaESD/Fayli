# --- Base ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# --- Développement (hot reload Vite) ---
FROM base AS dev
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# --- Build de production ---
FROM base AS build
RUN npm install
COPY . .
RUN npm run build

# --- Image de production (Nginx sert les fichiers statiques) ---
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
