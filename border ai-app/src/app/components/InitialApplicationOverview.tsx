import React from 'react';
import { Button } from './ui/button';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { QuestionnaireData } from './SetupQuestionnaire';

interface InitialApplicationOverviewProps {
  data: QuestionnaireData;
  onStartApplication: () => void;
  onReset: () => void;
}

export function InitialApplicationOverview({
  data,
  onStartApplication,
  onReset,
}: InitialApplicationOverviewProps) {
  const getApplicationType = () => {
    if (!data.purpose) {
      return 'Visa';
    }

    // Handle Study
    if (data.purpose === 'Study') {
      if (data.permitType?.includes('first')) {
        return 'Study Permit';
      } else if (data.permitType?.includes('extended') || data.permitType?.includes('extend')) {
        return 'Extended Study Permit';
      } else if (data.permitType?.includes('have')) {
        return 'Study Permit';
      }
      return 'Study Permit';
    }

    // Handle Work
    if (data.purpose === 'Work') {
      if (data.permitType?.includes('first')) {
        return 'Work Permit';
      } else if (data.permitType?.includes('extended') || data.permitType?.includes('extend')) {
        return 'Extended Work Permit';
      } else if (data.permitType?.includes('have')) {
        return 'Work Permit';
      }
      return 'Work Permit';
    }

    // Handle Visit
    if (data.purpose === 'Visit as a tourist') {
      return 'Visit Visa (Tourist)';
    }

    if (data.purpose === 'Visit family') {
      return 'Visit Visa (Family)';
    }

    if (data.purpose?.includes('transit')) {
      return 'Transit Visa';
    }

    if (data.purpose?.includes('business') || data.purpose?.includes('meeting')) {
      return 'Business Visitor Visa';
    }

    return 'Visa';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b bg-white">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Your Application Profile is Ready!
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Based on your responses, here's what we determined
            </p>

            {/* Application General Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Application General Info
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Application Type
                  </label>
                  <div className="bg-white rounded-lg p-4 border-2 border-[#E9692C]">
                    <p className="font-semibold text-gray-900">{getApplicationType()}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Nationality
                  </label>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                    <p className="font-semibold text-gray-900">{data.nationality}</p>
                  </div>
                </div>
              </div>

              {data.country && (
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Destination Country
                  </label>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                    <p className="font-semibold text-gray-900">{data.country}</p>
                  </div>
                </div>
              )}

              {data.purpose && (
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Purpose of Visit
                  </label>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                    <p className="font-semibold text-gray-900">{data.purpose}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={onReset}
                className="w-full sm:w-auto border-gray-300 hover:bg-gray-50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset and Repeat
              </Button>
              <Button
                onClick={onStartApplication}
                className="w-full sm:w-auto bg-[#E9692C] hover:bg-[#d15a24]"
              >
                Start Preparing Your Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}