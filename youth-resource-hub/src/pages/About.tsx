import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config';

const About: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-slate-900">About this project</h1>
        <p className="mt-1 text-sm text-slate-700">
          {SITE_CONFIG.siteName} is a trauma-informed digital resource hub designed for young adults
          who have been in foster care, the staff who support them, and other residents of{' '}
          {SITE_CONFIG.countyName}.
        </p>
      </header>

      <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm text-sm text-slate-800">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Why this site exists</h2>
          <p className="mt-1">
            Many young people who have been in foster care have to navigate housing, jobs, school,
            and health systems while also handling daily life. This site aims to bring together plain
            language information about local programs so that youth and providers can see options in
            one place.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Partners and roles</h2>
          <p className="mt-1">
            This site is developed in partnership with community organizations in {SITE_CONFIG.countyName},{' '}
            including {SITE_CONFIG.agencyName}. Organization names, logos, and contact details can be
            updated as the project grows.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Trauma-informed and accessibility practices</h2>
          <p className="mt-1">
            The design of this site follows trauma-informed principles: safety, trust and
            transparency, choice, collaboration, and cultural responsiveness. The site also aims to
            meet WCAG 2.2 AA accessibility guidelines so that people using screen readers, keyboards,
            and mobile devices can access information.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">How resource information is maintained</h2>
          <p className="mt-1">
            Resource details are stored in a simple, structured file that can be updated by approved
            staff. Each entry includes a “last verified” date so that users know how recent the
            information is. Local teams can decide how often to review and refresh entries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
