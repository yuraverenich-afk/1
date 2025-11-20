import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import Breadcrumbs from '../components/Breadcrumbs';
import ResourceCard from '../components/ResourceCard';
import { useResources } from '../context/ResourcesContext';
import type { Resource } from '../types/resource';

interface LocationState {
  eligibilityAnswers?: {
    ageRange: '18-24' | '25-30' | '30+' | null;
    livingSituation: string | null;
    employment: string | null;
    schoolStatus: string | null;
    fosterCareHistory: 'yes' | 'no' | 'prefer-not' | null;
  };
}

const FindHelp: React.FC = () => {
  const { resources, categories } = useResources();
  const location = useLocation();
  const state = (location.state || {}) as LocationState;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [ageGroup, setAgeGroup] = useState('any');
  const [onlyFosterAlumni, setOnlyFosterAlumni] = useState(false);

  React.useEffect(() => {
    if (state.eligibilityAnswers?.ageRange) {
      if (state.eligibilityAnswers.ageRange === '18-24') setAgeGroup('18-24');
      else if (state.eligibilityAnswers.ageRange === '25-30') setAgeGroup('25-30');
      else setAgeGroup('30+');
    }
    if (state.eligibilityAnswers?.fosterCareHistory === 'yes') {
      setOnlyFosterAlumni(true);
    }
  }, [state.eligibilityAnswers]);

  const handleToggleCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category) ? current.filter((c) => c !== category) : [...current, category]
    );
  };

  const filteredResources = useMemo(() => {
    let result: Resource[] = [...resources];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((resource) => {
        return (
          resource.name.toLowerCase().includes(q) ||
          resource.description.toLowerCase().includes(q) ||
          resource.category.toLowerCase().includes(q) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          resource.services_offered.some((s) => s.toLowerCase().includes(q))
        );
      });
    }

    if (selectedCategories.length > 0) {
      result = result.filter((resource) => selectedCategories.includes(resource.category));
    }

    if (ageGroup !== 'any') {
      const testAge = ageGroup === '18-24' ? 21 : ageGroup === '25-30' ? 27 : 32;
      result = result.filter((resource) => {
        if (resource.age_min == null && resource.age_max == null) return true;
        if (resource.age_min != null && testAge < resource.age_min) return false;
        if (resource.age_max != null && testAge > resource.age_max) return false;
        return true;
      });
    }

    if (onlyFosterAlumni) {
      result = result.filter((resource) =>
        resource.tags.some((tag) => tag.toLowerCase().includes('foster-care'))
      );
    }

    return result;
  }, [resources, searchQuery, selectedCategories, ageGroup, onlyFosterAlumni]);

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Find Help' }]} />

      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-slate-900">Find help in your area</h1>
        <p className="mt-1 text-sm text-slate-700">
          Search for housing, jobs, education, mental health support, and more in the study county.
          You do not have to share your name to use this directory.
        </p>
      </header>

      <FilterBar
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        categories={categories}
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
        ageGroup={ageGroup}
        onAgeGroupChange={setAgeGroup}
        onlyFosterAlumni={onlyFosterAlumni}
        onOnlyFosterAlumniChange={setOnlyFosterAlumni}
      />

      <section aria-label="Resource results" className="mt-4">
        {filteredResources.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-900">No matches right now.</p>
            <p className="mt-1">
              Try removing a filter, using a simpler keyword, or looking at one category at a time.
              You can also call your local 211 helpline for more options.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              Showing {filteredResources.length} program
              {filteredResources.length === 1 ? '' : 's'}.
            </p>
            <div className="grid gap-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default FindHelp;
