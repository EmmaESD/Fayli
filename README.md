# Fayli

> _Courte description du projet à compléter._

Projet organisé en deux parties :

- **`api/`** — back-end [NestJS](https://nestjs.com/) (TypeScript)
- **`front/`** — front-end [React](https://react.dev/) + [Vite](https://vite.dev/) (TypeScript)

## Prérequis

- [Node.js](https://nodejs.org/) (version 20+ recommandée)
- npm

## Installation

À la racine du projet :

```bash
npm install          # installe les outils de la racine (concurrently)
npm run install:all  # installe les dépendances de api/ et front/
```

## Lancer le projet en développement

```bash
npm run dev
```

Démarre l'API et le front en même temps (`Ctrl+C` arrête les deux).

| Service | URL par défaut |
| ------- | -------------- |
| API     | http://localhost:3000 |
| Front   | http://localhost:5173 |

### Lancer séparément

```bash
# API seule
npm --prefix api run start:dev

# Front seul
npm --prefix front run dev
```

## Build de production

```bash
npm run build
```

## Structure du projet

```
Fayli/
├── api/          # back-end NestJS
├── front/        # front-end React + Vite
└── package.json  # scripts de commodité (racine)
```

## Scripts de la racine

| Commande | Description |
| -------- | ----------- |
| `npm run dev` | Lance l'API et le front simultanément |
| `npm run build` | Build l'API puis le front |
| `npm run install:all` | Installe les dépendances des deux sous-projets |
