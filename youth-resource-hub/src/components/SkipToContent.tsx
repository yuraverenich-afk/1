import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-teal-700 focus:ring-2 focus:ring-teal-600 focus:px-3 focus:py-2 rounded-md"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
