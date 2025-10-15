import { useState } from 'react';

const NAMES = ['Ana', 'Luis', 'Carlos', 'María', 'Lucía', 'Pedro', 'Sofía', 'Miguel'];

export default function SearchList() {
  const [query, setQuery] = useState('');
  const filtered = NAMES.filter(name => name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <label className="mb-4 text-lg font-semibold text-slate-200">Buscador de nombres</label>
      <input
        type="text"
        placeholder="Buscar nombre..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        data-testid="search-input"
        className="w-64 px-4 py-2 rounded-lg border-2 border-slate-400 text-lg bg-slate-900 text-slate-100 shadow-md mb-6"
      />
      <ul
        data-testid="search-list"
        className="w-64 bg-slate-800 rounded-xl border-2 border-slate-600 shadow-lg py-4 px-6 text-slate-100 text-lg"
      >
        {filtered.length === 0 ? (
          <li className="text-red-400">No encontrado</li>
        ) : (
          filtered.map(name => <li key={name} className="py-1 border-b border-slate-700 last:border-b-0">{name}</li>)
        )}
      </ul>
    </div>
  );
}
