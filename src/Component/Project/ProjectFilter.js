'use client';

export default function ProjectFilters({ filter, setFilter, search, setSearch }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects..."
          className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white"
        >
          <option value="all">All Categories</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Fashion">Fashion</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>
    </div>
  );
}