import React, { createContext, useContext, useEffect, useState } from 'react';

interface SavedResourcesContextValue {
  savedIds: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  clearAll: () => void;
}

const STORAGE_KEY = 'youth-resource-hub:saved-resources';

const SavedResourcesContext = createContext<SavedResourcesContextValue | undefined>(undefined);

export const SavedResourcesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setSavedIds(parsed.filter((id) => typeof id === 'string'));
        }
      }
    } catch {
      setSavedIds([]);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
    }
  }, [savedIds]);

  const toggleSaved = (id: string) => {
    setSavedIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const clearAll = () => setSavedIds([]);

  return (
    <SavedResourcesContext.Provider value={{ savedIds, toggleSaved, isSaved, clearAll }}>
      {children}
    </SavedResourcesContext.Provider>
  );
};

export const useSavedResources = (): SavedResourcesContextValue => {
  const ctx = useContext(SavedResourcesContext);
  if (!ctx) {
    throw new Error('useSavedResources must be used within a SavedResourcesProvider');
  }
  return ctx;
};
