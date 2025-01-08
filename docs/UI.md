# UI Components

## Thème

### Couleurs
```js
// tailwind.config.js
colors: {
  primary: '#002147',
  secondary: '#405975',
  accent: {
    orange: '#DA7929',
    yellow: '#F0B146',
    teal: '#16645F'
  }
}
```

### Typography
```css
/* src/styles/globals.css */
@font-face {
  font-family: 'Roboto';
  /* ... */
}
```

## Composants

### ServiceCard
```jsx
<ServiceCard
  title="Service Title"
  description="Description"
  icon="icon-name"
  onClick={handleClick}
/>
```

### Modal
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
>
  {/* Content */}
</Modal>
```

## Animations

```css
/* src/styles/animations.css */
.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms;
}
```
