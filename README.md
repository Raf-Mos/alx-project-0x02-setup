# Next.js Project Setup and Basics

## Introduction

Ce repository contient un projet Next.js complet qui démontre les concepts fondamentaux du développement web moderne. Le projet utilise TypeScript pour la sécurité des types, Tailwind CSS pour le styling, et implémente des composants réutilisables avec une architecture propre.

## Objectifs d'apprentissage

- Configuration d'une application Next.js avec TypeScript et Tailwind CSS
- Implémentation du routing basique avec le Pages Router de Next.js
- Création de composants réutilisables avec des interfaces TypeScript
- Intégration d'APIs externes pour récupérer des données
- Structure de projet suivant les meilleures pratiques
- Gestion des états et des props de composants
- Construction de layouts responsifs avec navigation

## Structure du projet

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
└── tsconfig.json
```

## Installation et démarrage

1. Clonez ce repository
2. Naviguez vers le dossier `alx-project-0x02`
3. Installez les dépendances : `npm install`
4. Démarrez le serveur de développement : `npm run dev -- -p 3000`
5. Ouvrez votre navigateur sur `http://localhost:3000`

## Fonctionnalités

- **Routing** : Navigation entre différentes pages
- **Composants réutilisables** : Card, Button, Modal avec props TypeScript
- **Intégration API** : Récupération de données depuis JSONPlaceholder
- **Design responsif** : Interface moderne avec Tailwind CSS
- **Architecture modulaire** : Organisation claire du code

## Technologies utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- ESLint
