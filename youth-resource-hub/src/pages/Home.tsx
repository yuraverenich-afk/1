import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

const Home: React.FC = () => {
  return (
    <div className="space-y-10">
      <section className="rounded-lg bg-gradient-to-r from-teal-700 to-teal-500 px-5 py-8 text-white shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Find housing, jobs, school, and support in {SITE_CONFIG.countyName}.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-teal-50">
            This site is for young adults who have been in foster care, the people who support them,
            and anyone in the community looking for local services. You stay in control. You can use
            this site without logging in and you can stop at any time.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/find-help"
              className="focus-ring inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-teal-800 no-underline hover:bg-teal-50"
            >
              Find help
            </Link>
            <Link
              to="/eligibility"
              className="focus-ring inline-flex items-center rounded-md border border-teal-100 bg-teal-600/10 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-teal-600/20"
            >
              Check possible matches
            </Link>
            <Link
              to="/get-help-now"
              className="focus-ring inline-flex items-center rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-red-800"
            >
              Get help now
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-how-it-works">
        <h2 id="home-how-it-works" className="text-xl font-semibold text-slate-900">
          How this site can help you
        </h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Search local programs</h3>
            <p className="mt-1 text-sm text-slate-700">
              Look up housing, jobs, education, counseling, and other supports across the study
              county. See who a program is for and what to expect.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Check possible eligibility</h3>
            <p className="mt-1 text-sm text-slate-700">
              Answer a few optional questions to see programs that might be a good fit. You can skip
              any question that feels uncomfortable.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Share with others</h3>
            <p className="mt-1 text-sm text-slate-700">
              Case managers, staff, and community members can quickly find, print, or share resource
              summaries with young people.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-safety" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 id="home-safety" className="text-xl font-semibold text-slate-900">
          Safety, privacy, and choice
        </h2>
        <div className="mt-2 space-y-2 text-sm text-slate-700">
          <p>
            This site follows trauma-informed and privacy-first practices. You do not have to create
            an account to use the directory. If you choose to save resources, they are stored only on
            your device.
          </p>
          <p>
            You are in control. You can close this site at any time. If any question or section feels
            uncomfortable, you can skip it.
          </p>
          <p>
            Learn more on our{' '}
            <Link to="/privacy" className="underline">
              Privacy &amp; Your Data
            </Link>{' '}
            page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
