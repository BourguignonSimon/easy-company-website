# Easy Company Website

## Structure du Projet

Le projet est organisé en plusieurs branches, chacune représentant une fonctionnalité majeure :

### 1. Main Branch (`main`)
- Configuration de base
- Structure du projet
- Composants de base

### 2. Authentication & CMS (`feature/auth-cms`)
- Système d'authentification
- Interface d'administration
- Gestion de contenu
- Gestion des services

### 3. UI Enhancements (`feature/ui-enhancements`)
- Mode sombre/clair
- Menu mobile responsive
- Recherche globale
- Filtres de services
- Animations

### 4. Marketing & Blog (`feature/marketing-blog`)
- Intégration LinkedIn
- Système de blog
- Newsletter
- Analytics

## Installation

```bash
# Cloner le repository
git clone https://github.com/BourguignonSimon/easy-company-website.git

# Installer les dépendances
cd easy-company-website
npm install

# Lancer le serveur de développement
npm run dev
```

## Fonctionnalités

### Authentication & CMS
- [x] Login/Logout
- [x] Gestion des services
- [x] Interface d'administration
- [ ] Gestion des médias
- [ ] Gestion des utilisateurs

### UI/UX
- [x] Mode sombre/clair
- [x] Menu mobile
- [x] Recherche globale
- [x] Filtres de services
- [ ] Animations avancées

### Marketing & Blog
- [x] Intégration posts LinkedIn
- [x] Système de blog
- [x] Newsletter
- [ ] Analytics
- [ ] SEO

## Technologies Utilisées

- **Framework** : Next.js
- **Styling** : Tailwind CSS
- **Icons** : Lucide React
- **Forms** : React Hook Form
- **CMS** : Strapi (à venir)
- **Analytics** : Google Analytics (à venir)

## Roadmap

### Phase 1 (Q1 2025)
- [x] Structure de base du site
- [x] Composants UI essentiels
- [ ] Authentification
- [ ] CMS de base
- [ ] Intégration initiale LinkedIn

### Phase 2 (Q2 2025)
- [ ] Blog complet
- [ ] Système de newsletter
- [ ] Analytics avancés
- [ ] SEO optimisation
- [ ] Mode sombre/clair

### Phase 3 (Q3 2025)
- [ ] Espace client sécurisé
- [ ] Système de gestion documentaire
- [ ] Chat en direct
- [ ] Système de notifications
- [ ] API Rest complète

### Phase 4 (Q4 2025)
- [ ] Applications mobiles
- [ ] Tableau de bord avancé
- [ ] Internationalisation complète
- [ ] Intégration IA pour le support
- [ ] Performance optimisation

## Arborescence des Fichiers

```
/src
  /components
    /layout
      Header.jsx
      Footer.jsx
      Navigation.jsx
    /services
      ServiceCard.jsx
      ServiceModal.jsx
      ServicesGrid.jsx
    /common
      LanguageToggle.jsx
      ContactForm.jsx
  /features
    /auth
      /components
      /api
    /cms
      /admin
      /config
    /blog
      /components
      /api
    /marketing
      /components
      /api
  /pages
  /styles
```

## Configuration

### Variables d'Environnement

Créez un fichier `.env.local` avec :

```env
NEXT_PUBLIC_API_URL=your_api_url
LINKEDIN_API_KEY=your_linkedin_api_key
GA_TRACKING_ID=your_ga_tracking_id
```

### Tailwind CSS

Le fichier de configuration (`tailwind.config.js`) inclut :
- Thème personnalisé
- Couleurs de la marque
- Polices personnalisées
- Plugins utilitaires

## Contribuer

1. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
2. Committez vos changements (`git commit -m 'Add: nouvelle fonctionnalite'`)
3. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
4. Créez une Pull Request

## Status des Versions

- **Version actuelle** : 0.1.0 (Janvier 2025)
- **Prochaine version** : 0.2.0 (Mars 2025)
- **Version stable prévue** : 1.0.0 (Juin 2025)
