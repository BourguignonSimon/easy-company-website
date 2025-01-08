import React from 'react';

export default function ServiceFilters({ categories, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}