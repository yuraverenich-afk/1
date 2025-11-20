import React from 'react';
import { useSavedResources } from '../context/SavedResourcesContext';

interface SavedButtonProps {
  resourceId: string;
}

const SavedButton: React.FC<SavedButtonProps> = ({ resourceId }) => {
  const { isSaved, toggleSaved } = useSavedResources();
  const saved = isSaved(resourceId);

  return (
    <button
      type="button"
      onClick={() => toggleSaved(resourceId)}
      className={\`focus-ring inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium \${saved
          ? 'border-teal-700 bg-teal-50 text-teal-800'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
      }\`}
      aria-pressed={saved}
    >
      {saved ? 'Saved' : 'Save'}
    </button>
  );
};

export default SavedButton;
