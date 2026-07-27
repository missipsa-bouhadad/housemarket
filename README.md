# House Market
>  Trouvez votre prochain bien immobilier : appartements, maisons et villas à acheter ou à louer sur House Market.

## Stack technique

| Type           | Outil / Librairie                       |
| -------------- | --------------------------------------- |
| Framework      | **Next.js 16.2**                        |
| UI             | **React 19**                            |
| Langage        | **TypeScript 5**                        |
| Style        | **TailwindCSS 4**                       |
| Icones         | **react-icons**                         |
| Utilitaires    | **clsx**                                |


## Structure du projet

```
housemarket/
├── public/
│   └── images/
│       ├── house_cover.png        # Image de fond du hero
│       ├── icon.png               # Icone du footer
│       ├── logo.png               # Logo du site
│       └── propreties/            # Photos des annonces
│           ├── image1.jpg … image6.jpg
├── src/
│   ├── app/
│   │   ├── globals.css            # Thème Tailwind + variables CSS
│   │   ├── layout.tsx             # Layout racine (polices, métadonnées)
│   │   ├── page.tsx               # Page d'accueil
│   │   └── favicon.ico
│   ├── components/
│   │   ├── general/
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── RecentPropreties.tsx
│   │   │   └── SearchBox.tsx
│   │   ├── layout/
│   │   │   └── FrontendLayout.tsx
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── properties/
│   │   │   └── PropertyCard.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   ├── constants/
│   │   └── dummyPropreties.tsx    # Jeu de données (6 annonces )
│   └── types/
│       └── property.tsx           # Modèle (interface) d'une propriété
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config (via @theme)
├── tsconfig.json
└── package.json
```

## Démarrage

### Pré-requis

- **Node.js 20+** 
- **npm** 

### Installation

```bash
# 1. Cloner le dépot
git clone https://github.com/missipsa-bouhadad/housemarket.git
cd housemarket

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur
npm run dev
```

L'application est ensuite disponible sur
[http://localhost:3000](http://localhost:3000).



