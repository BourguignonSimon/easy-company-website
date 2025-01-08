# Authentication System

## Overview

L'authentification est gérée via JWT (JSON Web Tokens) avec les fonctionnalités suivantes :

- Login/Logout
- Gestion des sessions
- Récupération de mot de passe
- Protection des routes

## Configuration

```js
// src/features/auth/config/auth.js
export const authConfig = {
  tokenExpiration: '24h',
  refreshTokenExpiration: '7d',
  passwordMinLength: 8,
}
```

## Composants

### LoginForm
```jsx
<LoginForm onSuccess={handleSuccess} />
```

### Protected Route
```jsx
<ProtectedRoute>
  <AdminDashboard />
</ProtectedRoute>
```

## API Routes

- POST `/api/auth/login`
- POST `/api/auth/logout`
- POST `/api/auth/refresh-token`
- POST `/api/auth/reset-password`

## Middleware

```js
// src/middleware/authMiddleware.js
export function authMiddleware(req, res, next) {
  // Vérifie le token JWT
}
```
