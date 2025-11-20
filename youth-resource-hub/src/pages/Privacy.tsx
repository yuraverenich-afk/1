import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config';

const Privacy: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy & Your Data' }]} />

      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-slate-900">Privacy &amp; your data</h1>
        <p className="mt-1 text-sm text-slate-700">
          This page explains, in plain language, how {SITE_CONFIG.siteName} uses information. It is
          not legal advice and can be updated as partners make decisions.
        </p>
      </header>

      <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm text-sm text-slate-800">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">You can use this site without logging in</h2>
          <p className="mt-1">
            You do not need to create an account to search, read resource details, or use the
            eligibility checker. You can close the site at any time.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Saved resources stay on your device</h2>
          <p className="mt-1">
            If you tap “Save” on a resource, the site stores a small list of saved items on your
            device (using something called localStorage). This list is <strong>not</strong> sent to a
            server. If you clear your browser data or use a different device, your saved list will
            not carry over.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">No sensitive questions are required</h2>
          <p className="mt-1">
            The eligibility checker and other tools are optional. You can skip any question that
            feels uncomfortable. The answers are used only in your browser to suggest programs and
            are not saved or sent to a server by default.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Website analytics (optional)</h2>
          <p className="mt-1">
            If partners choose to add simple analytics in the future, they should use privacy-focused
            tools that do not track individuals across the internet. Any analytics should be clearly
            explained here, with an easy way to opt out.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">If you are using a shared or public device</h2>
          <p className="mt-1">
            If you are on a shared computer or phone, you can clear your saved resources on the Saved
            page. You can also clear your browser history if that feels safer.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">How to suggest updates or ask questions</h2>
          <p className="mt-1">
            If you see incorrect information or have questions about how your data is used, please
            contact the site team or your local {SITE_CONFIG.shortAgencyLabel} lead. The contact
            details for this will be decided locally and added here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
