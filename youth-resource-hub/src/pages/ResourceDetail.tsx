import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { useResources } from '../context/ResourcesContext';
import SavedButton from '../components/SavedButton';

const ResourceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getResourceById } = useResources();

  const resource = id ? getResourceById(id) : undefined;

  if (!resource) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Find Help', to: '/find-help' },
            { label: 'Not found' }
          ]}
        />
        <p className="text-sm text-slate-700">We could not find that resource.</p>
        <Link to="/find-help" className="focus-ring mt-2 inline-flex rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 no-underline hover:bg-slate-50">
          Back to Find Help
        </Link>
      </div>
    );
  }

  const {
    name,
    category,
    description,
    provider,
    eligibility_summary,
    eligibility_details,
    services_offered,
    location,
    contact,
    hours,
    cost,
    documentation_required,
    accessibility_features,
    last_verified,
    is_emergency,
    notes_for_providers
  } = resource;

  const lastUpdated = new Date(last_verified);

  const mapLink =
    location.latitude && location.longitude
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${location.address_line1} ${location.city} ${location.state} ${location.zip}`
        )}`
      : contact.website_url || undefined;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Find Help', to: '/find-help' },
          { label: name }
        ]}
      />

      <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {category}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">{name}</h1>
          <p className="mt-1 text-sm text-slate-700">
            Provided by <span className="font-medium">{provider}</span>
          </p>
          {is_emergency && (
            <p className="mt-1 inline-flex rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">
              24/7 or urgent service
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <SavedButton resourceId={resource.id} />
          <p className="text-xs text-slate-500">
            Last updated:{' '}
            <time dateTime={last_verified}>
              {lastUpdated.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <section aria-label="Description" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">What this program offers</h2>
            <p className="mt-1 text-sm text-slate-700">{description}</p>
            {services_offered && services_offered.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {services_offered.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            )}
          </section>

          <section aria-label="Eligibility" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Who this program may be for</h2>
            <p className="mt-1 text-sm text-slate-700">{eligibility_summary}</p>
            <p className="mt-2 text-sm text-slate-700 whitespace-pre-line">{eligibility_details}</p>
          </section>

          <section aria-label="Questions to ask" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Questions you can ask when you call</h2>
            <p className="mt-1 text-sm text-slate-700">
              You are allowed to ask questions before signing up. Here are a few you might use:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Can you tell me more about what this program looks like day to day?</li>
              <li>What are the main eligibility rules right now?</li>
              <li>What documents should I bring to my first visit?</li>
              <li>Is there a waitlist? If so, how long is it usually?</li>
              <li>What if I do not have all my documents yet?</li>
            </ul>
          </section>

          {notes_for_providers && (
            <section
              aria-label="Notes for providers"
              className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4"
            >
              <h2 className="text-sm font-semibold text-slate-900">Notes for providers</h2>
              <p className="mt-1 text-sm text-slate-700">{notes_for_providers}</p>
            </section>
          )}
        </div>

        <aside className="space-y-4 md:col-span-1">
          <section aria-label="Contact and location" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Contact and location</h2>
            <div className="mt-2 space-y-2 text-sm text-slate-700">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </h3>
                <p className="mt-1">
                  {location.address_line1}
                  {location.address_line2 && (
                    <>
                      <br />
                      {location.address_line2}
                    </>
                  )}
                  <br />
                  {location.city}, {location.state} {location.zip}
                </p>
              </div>

              {(contact.phone || contact.email || contact.website_url) && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Contact
                  </h3>
                  <ul className="mt-1 space-y-1">
                    {contact.phone && (
                      <li>
                        Phone:{' '}
                        <a href={`tel:${contact.phone}`} className="underline">
                          {contact.phone}
                        </a>
                      </li>
                    )}
                    {contact.email && (
                      <li>
                        Email:{' '}
                        <a href={`mailto:${contact.email}`} className="underline">
                          {contact.email}
                        </a>
                      </li>
                    )}
                    {contact.website_url && (
                      <li>
                        Website:{' '}
                        <a href={contact.website_url} className="underline">
                          Visit website
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {hours && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Hours
                  </h3>
                  <ul className="mt-1 space-y-0.5">
                    {Object.entries(hours).map(([day, text]) => (
                      <li key={day}>
                        <span className="font-medium">{day}:</span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cost
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  <span className="font-medium">{cost.level}</span> – {cost.details}
                </p>
              </div>

              {documentation_required && documentation_required.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Documents they may ask about
                  </h3>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
                    {documentation_required.map((doc) => (
                      <li key={doc}>{doc}</li>
                    ))}
                  </ul>
                  <p className="mt-1 text-xs text-slate-600">
                    If you do not have all of these, you can still call. Ask what is possible with
                    what you have.
                  </p>
                </div>
              )}

              {accessibility_features && accessibility_features.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Accessibility
                  </h3>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
                    {accessibility_features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {mapLink && (
                <div className="mt-2">
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white no-underline hover:bg-black"
                  >
                    Open in maps
                  </a>
                </div>
              )}
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
};

export default ResourceDetail;
