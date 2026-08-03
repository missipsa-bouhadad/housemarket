# House Market
>  Trouvez votre prochain bien immobilier : appartements, maisons et villas à acheter ou à louer sur House Market.

![Capture d'écran de la page d'accueil](.github/screenshots/home.png)

![Capture d'écran de section propriétés récentes](.github/screenshots/recent_properties.png)
  *Section des propriétés récentes*

## Stack technique

| Type           | Outil / Librairie                       |
| -------------- | --------------------------------------- |
| Framework      | **Next.js 16.2**                        |
| UI             | **React 19**                            |
| Langage        | **TypeScript 5**                        |
| Style          | **TailwindCSS 4**                       |
| Icones         | **react-icons**                         |
| Gestion d'état | **Zustand 5**                           |
| Utilitaires    | **clsx**                                |


## Structure du projet

```
housemarket/
├── public/
│   └── images/
│       ├── avatar.png             # Mon avatar
│       ├── house_cover.png        # Image de fond du hero
│       ├── icon.png               # Icone du footer
│       ├── logo.png               # Logo du site
│       └── properties/            # Photos des annonces
│           ├── image1.jpg … image6.jpg
├── src/
│   ├── app/
│   │   ├── globals.css            # Thème Tailwind + variables CSS
│   │   ├── layout.tsx             # Layout racine (polices, métadonnées, modales utilisés)
│   │   ├── page.tsx               # Page d'accueil
│   │   ├── marketplace/           # Page marketplace
│   │   │   └── page.tsx
│   │   ├── property/[propertyId]/ # Page détail d'une propriété
│   │   │   └── page.tsx
│   │   └── (protected)/           # Routes protégées
│   │       └── properties/        # Page propriétés
│   │           └── page.tsx
│   ├── components/                # Composants
│   │   ├── general/
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── RecentProperties.tsx
│   │   │   └── SearchBox.tsx
│   │   ├── layout/
│   │   │   └── FrontendLayout.tsx # Wrapper (Navbar + Footer)
│   │   ├── marketplace/
│   │   │   └── FilterButton.tsx
│   │   ├── modals/                    # Liste des modales
│   │   │   ├── Modal.tsx              
│   │   │   ├── LoginModal.tsx
│   │   │   ├── RegisterModal.tsx
│   │   │   ├── CreatePropertyModal.tsx
│   │   │   └── FilterModal.tsx
│   │   ├── navbar/                    # Navbar
│   │   │   └── Navbar.tsx
│   │   ├── properties/
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyTypeCard.tsx
│   │   │   ├── Counter.tsx   
│   │   │   ├── EmailForm.tsx
│   │   │   └── ImageUpload.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Input.tsx          # Input / Textarea
│   ├── constants/
│   │   ├── dummyProperties.tsx    # Jeu de données (6 annonces)
│   │   └── PropertyTypes.ts       # Jeu de données (types de biens) 
│   ├── store/                     # Stores (Zustand)
│   │   ├── useAuthModal.ts
│   │   ├── useCreatePropretyModal.ts
│   │   └── useFilterModal.ts
│   └── types/
│       ├── property.tsx           # Modèle (interface) d'une propriété
│       └── propertyType.tsx       # Modèle (interface) d'un type d'une propriété
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



