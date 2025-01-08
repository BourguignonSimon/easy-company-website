// CMS Schema definitions
export const schemas = {
  service: {
    title: 'Service',
    fields: [
      { name: 'title', type: 'string', required: true },
      { name: 'description', type: 'text', required: true },
      { name: 'icon', type: 'string' },
      { name: 'duration', type: 'string' },
      { name: 'objectives', type: 'array' },
      { name: 'prerequisites', type: 'array' },
    ],
  },
  blogPost: {
    title: 'Blog Post',
    fields: [
      { name: 'title', type: 'string', required: true },
      { name: 'content', type: 'richText', required: true },
      { name: 'author', type: 'reference', required: true },
      { name: 'publishDate', type: 'date', required: true },
      { name: 'categories', type: 'array' },
      { name: 'tags', type: 'array' },
    ],
  },
};