import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResources } from '../context/ResourcesContext';

type StepKey = 'age' | 'living' | 'employment' | 'school' | 'care';

interface AnswerState {
  ageRange: '18-24' | '25-30' | '30+' | null;
  livingSituation: 'stable' | 'temporary' | 'unhoused' | null;
  employment: 'unemployed' | 'part-time' | 'full-time' | null;
  schoolStatus: 'none' | 'hs-ged' | 'college' | null;
  fosterCareHistory: 'yes' | 'no' | 'prefer-not' | null;
}

const steps: StepKey[] = ['age', 'living', 'employment', 'school', 'care'];

const EligibilityWizard: React.FC = () => {
  const [answers, setAnswers] = useState<AnswerState>({
    ageRange: null,
    livingSituation: null,
    employment: null,
    schoolStatus: null,
    fosterCareHistory: null
  });
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();
  const { resources } = useResources();

  const step = steps[currentStep];

  const canGoNext = true;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      navigate('/find-help', { state: { eligibilityAnswers: answers } });
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/find-help');
    } else {
      setCurrentStep((s) => s - 1);
    }
  };

  const updateAnswer = (patch: Partial<AnswerState>) => {
    setAnswers((prev) => ({ ...prev, ...patch }));
  };

  const matchedCount = (() => {
    let filtered = resources;

    if (answers.ageRange) {
      filtered = filtered.filter((resource) => {
        if (resource.age_min == null && resource.age_max == null) return true;
        const testAge =
          answers.ageRange === '18-24'
            ? 20
            : answers.ageRange === '25-30'
            ? 27
            : 32;
        if (resource.age_min != null && testAge < resource.age_min) return false;
        if (resource.age_max != null && testAge > resource.age_max) return false;
        return true;
      });
    }

    if (answers.fosterCareHistory === 'yes') {
      filtered = filtered.filter((resource) =>
        resource.tags.some((tag) =>
          tag.toLowerCase().includes('foster') || tag.toLowerCase().includes('alumni')
        )
      );
    }

    return filtered.length;
  })();

  const StepContent: React.FC = () => {
    switch (step) {
      case 'age':
        return (
          <>
            <h2 className="text-lg font-semibold text-slate-900">How old are you (about)?</h2>
            <p className="mt-1 text-sm text-slate-700">
              This helps us highlight programs that match age ranges. You can choose the closest
              option.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.ageRange === '18-24'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ ageRange: '18-24' })}
              >
                About 18–24
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.ageRange === '25-30'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ ageRange: '25-30' })}
              >
                About 25–30
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.ageRange === '30+'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ ageRange: '30+' })}
              >
                30 and up
              </button>
            </div>
          </>
        );
      case 'living':
        return (
          <>
            <h2 className="text-lg font-semibold text-slate-900">
              What best describes where you are staying right now?
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Choose the option that feels closest. You can skip if you are not sure.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.livingSituation === 'stable'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ livingSituation: 'stable' })}
              >
                In my own place or a steady lease
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.livingSituation === 'temporary'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ livingSituation: 'temporary' })}
              >
                Staying with friends, family, or couch-surfing
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.livingSituation === 'unhoused'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ livingSituation: 'unhoused' })}
              >
                I do not have a steady place to stay (for example, car, outside, shelter)
              </button>
              <button
                type="button"
                className="focus-ring rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm hover:bg-slate-50"
                onClick={() => updateAnswer({ livingSituation: null })}
              >
                I prefer not to say / skip this question
              </button>
            </div>
          </>
        );
      case 'employment':
        return (
          <>
            <h2 className="text-lg font-semibold text-slate-900">
              Are you working for pay right now?
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              This helps us surface job and money supports that fit your situation.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.employment === 'unemployed'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ employment: 'unemployed' })}
              >
                Not working for pay right now
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.employment === 'part-time'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ employment: 'part-time' })}
              >
                Working part-time
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.employment === 'full-time'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ employment: 'full-time' })}
              >
                Working full-time or close to full-time
              </button>
              <button
                type="button"
                className="focus-ring rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm hover:bg-slate-50"
                onClick={() => updateAnswer({ employment: null })}
              >
                I prefer not to say / skip this question
              </button>
            </div>
          </>
        );
      case 'school':
        return (
          <>
            <h2 className="text-lg font-semibold text-slate-900">
              What best describes your current school situation?
            </h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.schoolStatus === 'none'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ schoolStatus: 'none' })}
              >
                Not in school or training right now
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.schoolStatus === 'hs-ged'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ schoolStatus: 'hs-ged' })}
              >
                Working on high school diploma or GED
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.schoolStatus === 'college'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ schoolStatus: 'college' })}
              >
                In college, training, or trade program
              </button>
              <button
                type="button"
                className="focus-ring rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm hover:bg-slate-50"
                onClick={() => updateAnswer({ schoolStatus: null })}
              >
                I prefer not to say / skip this question
              </button>
            </div>
          </>
        );
      case 'care':
        return (
          <>
            <h2 className="text-lg font-semibold text-slate-900">
              Have you ever been in foster care or a similar system?
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              This helps us highlight programs designed for foster-care alumni. You can skip this
              question.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.fosterCareHistory === 'yes'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ fosterCareHistory: 'yes' })}
              >
                Yes, I have been in foster care or a similar system
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.fosterCareHistory === 'no'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ fosterCareHistory: 'no' })}
              >
                No
              </button>
              <button
                type="button"
                className={\`focus-ring rounded-lg border px-3 py-2 text-left text-sm \${answers.fosterCareHistory === 'prefer-not'
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'
                }\`}
                onClick={() => updateAnswer({ fosterCareHistory: 'prefer-not' })}
              >
                I prefer not to say
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section aria-label="Eligibility checker" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Check possible matches</h1>
          <p className="mt-1 text-sm text-slate-700">
            Answer a few quick questions to see programs that may be a good fit. You can skip any
            question that does not feel comfortable.
          </p>
        </div>
        <div className="hidden text-right text-xs text-slate-600 sm:block">
          <p>You are in control. You can stop at any time.</p>
          <p>Current matches: {matchedCount} programs (approximate).</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{matchedCount} possible matches</span>
        </div>
        <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-teal-600"
            style={{ width: \`\${progress}%\` }}
            aria-hidden="true"
          />
        </div>
      </div>

      <StepContent />

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="focus-ring inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canGoNext}
          className="focus-ring inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {currentStep === steps.length - 1 ? 'View suggested programs' : 'Next'}
        </button>
      </div>

      <p className="mt-4 text-xs text-slate-600">
        This tool gives general ideas only. It does not make final eligibility decisions. When you
        contact a program, staff can help you understand their current rules.
      </p>
    </section>
  );
};

export default EligibilityWizard;
