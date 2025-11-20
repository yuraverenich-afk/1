import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSavedResources } from '../context/SavedResourcesContext';
import { useResources } from '../context/ResourcesContext';
import ResourceCard from '../components/ResourceCard';

const Saved: React.FC = () => {
  const { savedIds, clearAll } = useSavedResources();
  const { resources } = useResources();

  const savedResources = resources.filter((r) => savedIds.includes(r.id));

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Saved' }]} />

      <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Saved resources</h1>
          <p className="mt-1 text-sm text-slate-700">
            These are programs you chose to save on this device. They are not shared with a server.
            If you clear your browser data or use a different device, this list will not show up
            there.
          </p>
        </div>
        {savedResources.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="focus-ring inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Clear all saved
          </button>
        )}
      </header>

      {savedResources.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
          <p>You have not saved any resources yet.</p>
          <p className="mt-1">
            On any resource card, select the <strong>Save</strong> button to add it to this list.
          </p>
        </div>
      ) : (
        <section aria-label="Saved resources">
          <div className="space-y-3">
            {savedResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Saved;
