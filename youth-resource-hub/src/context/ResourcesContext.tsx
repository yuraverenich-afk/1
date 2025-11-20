import React, { createContext, useContext } from 'react';
import type { Resource } from '../types/resource';
import resourcesData from '../data/resources.json';

interface ResourcesContextValue {
  resources: Resource[];
  categories: string[];
  getResourceById: (id: string) => Resource | undefined;
}

const ResourcesContext = createContext<ResourcesContextValue | undefined>(undefined);

export const ResourcesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const resources = resourcesData as Resource[];

  const categories = Array.from(new Set(resources.map((r) => r.category))).sort();

  const getResourceById = (id: string) => resources.find((r) => r.id === id);

  return (
    <ResourcesContext.Provider value={{ resources, categories, getResourceById }}>
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResources = (): ResourcesContextValue => {
  const ctx = useContext(ResourcesContext);
  if (!ctx) {
    throw new Error('useResources must be used within a ResourcesProvider');
  }
  return ctx;
};
