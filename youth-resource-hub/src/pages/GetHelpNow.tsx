import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const GetHelpNow: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Get Help Now' }]} />

      <section className="rounded-lg border border-red-200 bg-red-50 p-4 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Get help now</h1>
        <p className="mt-1 text-sm text-slate-800">
          If you are in immediate danger or having a medical emergency, call <strong>911</strong>.
        </p>
      </section>

      <section className="mt-4 grid gap-4 md:grid-cols-2" aria-label="Crisis and support lines">
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            988 Suicide &amp; Crisis Lifeline (United States)
          </h2>
          <p className="mt-1 text-sm text-slate-700">
            Call or text <strong>988</strong> to reach trained counselors for emotional support,
            mental health crises, or thoughts of self-harm.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Available 24/7</li>
            <li>Free and confidential</li>
            <li>Available in English and Spanish, with interpretation in many languages</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href="tel:988"
              className="focus-ring inline-flex items-center rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-red-800"
            >
              Call 988
            </a>
            <a
              href="sms:988"
              className="focus-ring inline-flex items-center rounded-md border border-red-700 bg-white px-4 py-2 text-sm font-semibold text-red-700 no-underline hover:bg-red-50"
            >
              Text 988
            </a>
          </div>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Local 211 helpline</h2>
          <p className="mt-1 text-sm text-slate-700">
            211 connects you to local resources such as food, shelter, mental health support, and
            more. Your exact 211 number and website can be customized for your area.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Available 24/7 in most areas</li>
            <li>Free and confidential</li>
            <li>Staff can help you find local programs and warm-transfer your call</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href="tel:211"
              className="focus-ring inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-black"
            >
              Call 211
            </a>
          </div>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Emergency and domestic violence shelter</h2>
          <p className="mt-1 text-sm text-slate-700">
            This space is for your local domestic violence hotline or emergency shelter contact
            information. For now, it is filled with placeholder text.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Example: “Call <strong>555-123-4567</strong> for confidential help with safety planning,
            emergency shelter, and support.”
          </p>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">If using this site does not feel safe</h2>
          <p className="mt-1 text-sm text-slate-700">
            You can close this window or tab at any time. Your saved resources are stored only on
            this device. If you are using a shared or public device, you can clear saved resources on
            the Saved page.
          </p>
        </article>
      </section>
    </div>
  );
};

export default GetHelpNow;
