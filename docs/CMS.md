# Content Management System

## Overview

Le CMS permet de gérer :

- Services
- Articles de blog
- Pages statiques
- Médias

## Schémas

### Service
```js
{
  title: String,
  description: Text,
  icon: String,
  duration: String,
  objectives: [String],
  prerequisites: [String]
}
```

### Blog Post
```js
{
  title: String,
  content: RichText,
  author: Reference,
  publishDate: Date,
  categories: [String],
  tags: [String]
}
```

## Interface d'Administration

- Dashboard
- Editeur de contenu
- Gestionnaire de médias
- Gestion des utilisateurs

## API

- GET `/api/services`
- POST `/api/services`
- PUT `/api/services/:id`
- DELETE `/api/services/:id`

## Hooks

```js
// src/features/cms/hooks/useService.js
export function useService(id) {
  // Hook pour gérer un service
}
```
