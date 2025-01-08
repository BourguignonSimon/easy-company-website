# Marketing Features

## LinkedIn Integration

### Configuration
```js
// src/features/marketing/config/linkedin.js
export const linkedInConfig = {
  apiVersion: 'v2',
  scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social']
}
```

### Posts Import
```js
// src/features/marketing/api/linkedin.js
export async function importLinkedInPosts() {
  // Import logic
}
```

## Newsletter

### Configuration Mailchimp
```js
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id
```

### Subscription Form
```jsx
<NewsletterForm
  onSubmit={handleSubmit}
  placeholder="Votre email"
/>
```

## Analytics

### Google Analytics
```js
// src/lib/gtag.js
export const GA_TRACKING_ID = 'UA-XXXXXXXXX'
```

### Events Tracking
```js
export function trackEvent({
  action,
  category,
  label,
  value
}) {
  // Track event
}
```
