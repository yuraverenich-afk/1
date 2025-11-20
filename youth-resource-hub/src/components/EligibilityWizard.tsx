import React, { useState } from 'react';

type AgeRange = '18-24' | '25-30' | '30-plus' | 'skip';
type HousingStatus = 'stable' | 'couch-surfing' | 'unhoused' | 'shelter' | 'skip';
type WorkStatus = 'unemployed' | 'part-time' | 'full-time' | 'gig' | 'skip';
type SchoolStatus = 'not-in-school' | 'hs-ged' | 'college' | 'training' | 'skip';

interface Answers {
  ageRange: AgeRange | '';
  housing: HousingStatus | '';
  work: WorkStatus | '';
  school: SchoolStatus | '';
  hasChildren: 'yes' | 'no' | 'skip' | '';
}

const initialAnswers: Answers = {
  ageRange: '',
  housing: '',
  work: '',
  school: '',
  hasChildren: '',
};

const EligibilityWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 5;

  const baseButtonClasses =
    'focus-ring rounded-lg border px-3 py-2 text-left text-sm transition-colors';
  const selectedClasses = 'border-teal-700 bg-teal-50';
  const unselectedClasses = 'border-slate-300 bg-white hover:bg-slate-50';

  const updateAnswer = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setStep(0);
    setShowResults(false);
  };

  const renderAgeStep = () => (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        How old are you right now?
      </h2>
      <p className="mt-1 text-sm text-slate-700">
        This helps us highlight programs that focus on young adults in the study county.
        You can skip if you prefer.
      </p>

      <div className="mt-4 space-y-2">
        {[
          { value: '18-24' as AgeRange, label: '18–24' },
          { value: '25-30' as AgeRange, label: '25–30' },
          { value: '30-plus' as AgeRange, label: '31 or older' },
          { value: 'skip' as AgeRange, label: 'Prefer not to say / skip' },
        ].map(option => (
          <button
            key={option.value}
            type="button"
            className={
              `${baseButtonClasses} ` +
              (answers.ageRange === option.value ? selectedClasses : unselectedClasses)
            }
            onClick={() => updateAnswer('ageRange', option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderHousingStep = () => (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        What best describes your current living situation?
      </h2>
      <p className="mt-1 text-sm text-slate-700">
        Choose the option that feels closest. This helps surface housing and stability
        resources. You can always skip.
      </p>

      <div className="mt-4 space-y-2">
        {[
          { value: 'stable' as HousingStatus, label: 'Stable housing (lease or own)' },
          { value: 'couch-surfing' as HousingStatus, label: 'Staying with friends/family (couch-surfing)' },
          { value: 'shelter' as HousingStatus, label: 'Emergency shelter or transitional housing' },
          { value: 'unhoused' as HousingStatus, label: 'Sleeping outside / in car / place not meant for living' },
          { value: 'skip' as HousingStatus, label: 'Prefer not to say / skip' },
        ].map(option => (
          <button
            key={option.value}
            type="button"
            className={
              `${baseButtonClasses} ` +
              (answers.housing === option.value ? selectedClasses : unselectedClasses)
            }
            onClick={() => updateAnswer('housing', option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderWorkStep = () => (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        What best describes your work situation?
      </h2>
      <p className="mt-1 text-sm text-slate-700">
        This helps us highlight job and income supports. There are no right or wrong answers.
      </p>

      <div className="mt-4 space-y-2">
        {[
          { value: 'unemployed' as WorkStatus, label: 'Not working right now' },
          { value: 'part-time' as WorkStatus, label: 'Working part-time' },
          { value: 'full-time' as WorkStatus, label: 'Working full-time' },
          { value: 'gig' as WorkStatus, label: 'Gig/irregular work (cash jobs, apps, etc.)' },
          { value: 'skip' as WorkStatus, label: 'Prefer not to say / skip' },
        ].map(option => (
          <button
            key={option.value}
            type="button"
            className={
              `${baseButtonClasses} ` +
              (answers.work === option.value ? selectedClasses : unselectedClasses)
            }
            onClick={() => updateAnswer('work', option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderSchoolStep = () => (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        Which of these feels closest to your current school or training status?
      </h2>
      <p className="mt-1 text-sm text-slate-700">
        This helps surface education, training, and financial aid resources.
      </p>

      <div className="mt-4 space-y-2">
        {[
          { value: 'not-in-school' as SchoolStatus, label: 'Not in school or training right now' },
          { value: 'hs-ged' as SchoolStatus, label: 'In high school / working on GED' },
          { value: 'college' as SchoolStatus, label: 'In college or technical college' },
          { value: 'training' as SchoolStatus, label: 'In a training or certification program' },
          { value: 'skip' as SchoolStatus, label: 'Prefer not to say / skip' },
        ].map(option => (
          <button
            key={option.value}
            type="button"
            className={
              `${baseButtonClasses} ` +
              (answers.school === option.value ? selectedClasses : unselectedClasses)
            }
            onClick={() => updateAnswer('school', option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderChildrenStep = () => (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        Do you have children you care for?
      </h2>
      <p className="mt-1 text-sm text-slate-700">
        Some programs are designed for parents or caregivers. You can skip this question.
      </p>

      <div className="mt-4 space-y-2">
        {[
          { value: 'yes' as const, label: 'Yes' },
          { value: 'no' as const, label: 'No' },
          { value: 'skip' as const, label: 'Prefer not to say / skip' },
        ].map(option => (
          <button
            key={option.value}
            type="button"
            className={
              `${baseButtonClasses} ` +
              (answers.hasChildren === option.value ? selectedClasses : unselectedClasses)
            }
            onClick={() => updateAnswer('hasChildren', option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return renderAgeStep();
      case 1:
        return renderHousingStep();
      case 2:
        return renderWorkStep();
      case 3:
        return renderSchoolStep();
      case 4:
        return renderChildrenStep();
      default:
        return null;
    }
  };

  const progressLabel = `Step ${step + 1} of ${totalSteps}`;

  return (
    <section aria-label="Eligibility checker" className="mx-auto max-w-3xl">
      <header className="mb-4">
        <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
          Quick screener
        </p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">
          Check what types of programs may be a good fit
        </h1>
        <p className="mt-2 text-sm text-slate-700">
          This tool does not make any decisions about you. It gives a gentle starting point
          so you can see which kinds of housing, education, work, or support programs you
          may want to explore. You are in control and can skip any question.
        </p>
      </header>

      {!showResults && (
        <>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-600">{progressLabel}</p>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-medium text-teal-700 underline hover:text-teal-800"
            >
              Start over
            </button>
          </div>

          <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-teal-600 transition-all"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            {renderStep()}
          </div>

          <div className="mt-4 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className="focus-ring inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="focus-ring inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
            >
              {step === totalSteps - 1 ? 'See suggestions' : 'Next'}
            </button>
          </div>
        </>
      )}

      {showResults && (
        <div className="mt-6 rounded-lg border border-teal-100 bg-teal-50 p-4 text-sm text-slate-800">
          <h2 className="text-base font-semibold text-teal-900">
            Suggested directions to explore
          </h2>
          <p className="mt-2">
            Based on what you shared, you may want to look at:
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <span className="font-semibold">Housing and stability supports</span> if
              your living situation feels unstable or stressful.
            </li>
            <li>
              <span className="font-semibold">Employment and career resources</span> if
              you are looking for work, more hours, or a different type of job.
            </li>
            <li>
              <span className="font-semibold">Education, training, and financial aid</span> if
              you are interested in high school completion, college, or skill-building.
            </li>
            <li>
              <span className="font-semibold">Mental health and wellbeing services</span> if
              stress, anxiety, or past experiences are making daily life harder.
            </li>
            {answers.hasChildren === 'yes' && (
              <li>
                <span className="font-semibold">Parenting and family supports</span> that
                help with childcare, parenting classes, and family-friendly housing.
              </li>
            )}
          </ul>
          <p className="mt-3">
            You can now go to the <strong>Find Help</strong> page and use filters such as
            housing, employment, education, or behavioral health to see specific programs
            in the study county.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 focus-ring inline-flex items-center rounded-md border border-teal-700 bg-white px-3 py-2 text-xs font-semibold text-teal-800 hover:bg-teal-50"
          >
            Start again
          </button>
        </div>
      )}
    </section>
  );
};

export default EligibilityWizard;
