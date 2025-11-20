import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import EligibilityWizard from '../components/EligibilityWizard';

const Eligibility: React.FC = () => {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Check Eligibility' }
        ]}
      />
      <EligibilityWizard />
    </div>
  );
};

export default Eligibility;
