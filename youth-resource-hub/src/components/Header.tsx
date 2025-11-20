import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

const navLinkClass =
  'focus-ring inline-flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100';

const activeClass = 'text-teal-700';
const inactiveClass = 'text-slate-800';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `${navLinkClass} ${isActive ? activeClass : inactiveClass}`;

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="focus-ring flex items-center gap-2 rounded-md px-2 py-1 no-underline"
              onClick={closeMenu}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                Y
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">{SITE_CONFIG.siteName}</span>
                <span className="text-xs text-slate-500 leading-tight">
                  Serving young adults in {SITE_CONFIG.countyName}
                </span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-3" aria-label="Main navigation">
            <NavLink to="/find-help" className={linkClasses}>
              Find Help
            </NavLink>
            <NavLink to="/eligibility" className={linkClasses}>
              Check Eligibility
            </NavLink>
            <NavLink to="/providers" className={linkClasses}>
              For Providers
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/privacy" className={linkClasses}>
              Privacy &amp; Your Data
            </NavLink>
            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `${navLinkClass} ${
                  isActive ? 'bg-teal-50 text-teal-800' : 'border border-teal-600 text-teal-700'
                }`
              }
            >
              Saved
            </NavLink>

            <NavLink
              to="/get-help-now"
              className="focus-ring inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
            >
              Get Help Now
            </NavLink>
          </nav>

          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-slate-200 bg-white"
          aria-label="Main navigation mobile"
        >
          <div className="space-y-1 px-4 py-3">
            <NavLink to="/find-help" className={linkClasses} onClick={closeMenu}>
              Find Help
            </NavLink>
            <NavLink to="/eligibility" className={linkClasses} onClick={closeMenu}>
              Check Eligibility
            </NavLink>
            <NavLink to="/providers" className={linkClasses} onClick={closeMenu}>
              For Providers
            </NavLink>
            <NavLink to="/about" className={linkClasses} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/privacy" className={linkClasses} onClick={closeMenu}>
              Privacy &amp; Your Data
            </NavLink>
            <NavLink to="/saved" className={linkClasses} onClick={closeMenu}>
              Saved
            </NavLink>
            <NavLink
              to="/get-help-now"
              className="focus-ring mt-1 inline-flex w-full items-center justify-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
              onClick={closeMenu}
            >
              Get Help Now
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
