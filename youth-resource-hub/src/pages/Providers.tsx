import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config';

const Providers: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'For Providers' }]} />

      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-slate-900">For providers and staff</h1>
        <p className="mt-1 text-sm text-slate-700">
          This page is for case managers, {SITE_CONFIG.shortAgencyLabel} workers, nonprofit staff,
          and others who support young adults in {SITE_CONFIG.countyName}.
        </p>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Using this hub with young people</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Start by asking what the young person wants to work on today (for example, housing,
            money, school, or mental health).
          </li>
          <li>
            Use the <strong>Find Help</strong> page together and read descriptions out loud if that
            is helpful.
          </li>
          <li>
            Offer choices. Ask, “Which of these options feels like it might fit best?” instead of
            making the choice for them.
          </li>
          <li>
            Use the <strong>Questions to ask when you call</strong> on each resource page to help
            the young person lead the call or visit.
          </li>
        </ul>
      </section>

      <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">
          Trauma-informed digital navigation tips
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Check in before asking sensitive questions. You can say, “I am going to ask about your
            housing and work situation. You can skip any question.”
          </li>
          <li>
            Avoid reading out loud any labels that feel blaming or shaming. Use the young person’s
            own words when possible.
          </li>
          <li>
            If the young person looks overwhelmed, pause and ask what would feel most helpful next.
          </li>
          <li>
            Remind them that they can stop using the site at any time and that you can come back to
            it later.
          </li>
        </ul>
      </section>

      <section className="mt-4 grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Share this site</h2>
          <p className="mt-1 text-sm text-slate-700">
            You can share this site with young people, caregivers, and other staff.
          </p>
          <div className="mt-2 rounded-md bg-slate-50 p-3 text-sm text-slate-800">
            <p className="font-semibold">Short message you can copy:</p>
            <p className="mt-1">
              “Here is a directory of local programs for young adults in {SITE_CONFIG.countyName}.
              You can search for housing, jobs, school, counseling, and more: [insert site link].”
            </p>
          </div>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Printable one-pager (coming soon)</h2>
          <p className="mt-1 text-sm text-slate-700">
            You can create a simple one-page flyer about this site. Once designed, the PDF can be
            linked here for download and printing.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Placeholder: “Download the Youth Resource Hub one-pager (PDF).”
          </p>
        </article>
      </section>
    </div>
  );
};

export default Providers;
