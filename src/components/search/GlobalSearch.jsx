import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Implement search logic
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </form>

      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg">
          {results.map((result) => (
            <div key={result.id} className="p-4 hover:bg-gray-50">
              {/* Render search result */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}