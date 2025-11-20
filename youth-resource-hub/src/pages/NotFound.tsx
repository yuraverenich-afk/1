import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-700">
        We could not find the page you were looking for. The link may be out of date or typed
        incorrectly.
      </p>
      <Link
        to="/"
        className="focus-ring inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-teal-700"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
