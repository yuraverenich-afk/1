import React from 'react';
import { Link } from 'react-router-dom';
import type { Resource } from '../types/resource';
import SavedButton from './SavedButton';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const lastUpdated = new Date(resource.last_verified);

  return (
    <article className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
  to={`/resources/${resource.id}`}
  className="focus-ring rounded-sm no-underline"
>
              {resource.name}
            </Link>
          </h3>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-500">
            {resource.category}
          </p>
        </div>
        <SavedButton resourceId={resource.id} />
      </div>

      <p className="mt-2 text-sm text-slate-700 line-clamp-3">{resource.description}</p>

      <p className="mt-2 text-sm text-slate-800">
        <span className="font-semibold">Who it may help: </span>
        {resource.eligibility_summary}
      </p>

      <div className="mt-2 flex flex-wrap gap-1">
        {resource.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
          >
            {tag}
          </span>
        ))}
        {resource.cost.level === 'Free' && (
          <span className="inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
            Free
          </span>
        )}
        {resource.is_emergency && (
          <span className="inline-flex rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">
            24/7 / urgent
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <p>
          Last updated:{' '}
          <time dateTime={resource.last_verified}>
            {lastUpdated.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </p>
        <Link
          to={\`/resources/\${resource.id}\`}
          className="focus-ring inline-flex items-center rounded-md bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white no-underline hover:bg-teal-700"
        >
          View details
        </Link>
      </div>
    </article>
  );
};

export default ResourceCard;
