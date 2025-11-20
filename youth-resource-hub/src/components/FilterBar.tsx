import React from 'react';

interface FilterBarProps {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  ageGroup: string;
  onAgeGroupChange: (value: string) => void;
  onlyFosterAlumni: boolean;
  onOnlyFosterAlumniChange: (value: boolean) => void;
}

const ageOptions = [
  { value: 'any', label: 'Any age 18+' },
  { value: '18-24', label: 'About 18–24' },
  { value: '25-30', label: 'About 25–30' },
  { value: '30+', label: '30 and up' }
];

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchQueryChange,
  categories,
  selectedCategories,
  onToggleCategory,
  ageGroup,
  onAgeGroupChange,
  onlyFosterAlumni,
  onOnlyFosterAlumniChange
}) => {
  return (
    <section
      aria-label="Search and filter resources"
      className="mb-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1">
          <label htmlFor="resource-search" className="block text-sm font-medium text-slate-800">
            Search
          </label>
          <p className="mt-0.5 text-xs text-slate-500">
            Search by keyword (for example, housing, job training, counseling).
          </p>
          <input
            id="resource-search"
            type="search"
            className="focus-ring mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            placeholder="Search by keyword"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
          />
        </div>

        <div className="w-full md:w-56">
          <label htmlFor="age-group" className="block text-sm font-medium text-slate-800">
            Age range
          </label>
          <select
            id="age-group"
            className="focus-ring mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white"
            value={ageGroup}
            onChange={(e) => onAgeGroupChange(e.target.value)}
          >
            {ageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 border-t border-slate-200 pt-3">
        <p className="text-sm font-medium text-slate-800">Categories</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {categories.map((category) => {
            const selected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => onToggleCategory(category)}
                className={\`focus-ring inline-flex items-center rounded-full border px-3 py-1 text-xs \${selected
                    ? 'border-teal-700 bg-teal-50 text-teal-800'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }\`}
                aria-pressed={selected}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 border-t border-slate-200 pt-3">
        <label className="inline-flex items-center gap-2 text-sm text-slate-800">
          <input
            type="checkbox"
            className="focus-ring h-4 w-4 rounded border-slate-300"
            checked={onlyFosterAlumni}
            onChange={(e) => onOnlyFosterAlumniChange(e.target.checked)}
          />
          <span>Show programs designed for foster-care alumni</span>
        </label>
        <p className="mt-0.5 text-xs text-slate-500">
          Uses tags like “foster-care alumni” and similar. You can still contact other programs if
          they seem helpful.
        </p>
      </div>
    </section>
  );
};

export default FilterBar;
