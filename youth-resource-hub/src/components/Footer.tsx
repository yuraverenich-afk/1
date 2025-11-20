import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-slate-600">
            <p>
              {SITE_CONFIG.siteName} is a trauma-informed, plain-language directory of services for
              young adults in {SITE_CONFIG.countyName}.
            </p>
            <p>
              Built with support from partners including {SITE_CONFIG.agencyName} (name
              customizable).
            </p>
            <p className="text-xs text-slate-500">
              This site does not replace emergency services. If you are in immediate danger, call
              911.
            </p>
          </div>
          <div className="space-y-1 text-sm text-slate-600">
            <p>
              <Link to="/privacy" className="underline">
                Privacy &amp; Your Data
              </Link>
              {' · '}
              <Link to="/get-help-now" className="underline">
                Get Help Now
              </Link>
            </p>
            <p className="text-xs text-slate-500">&copy; {year} {SITE_CONFIG.siteName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
