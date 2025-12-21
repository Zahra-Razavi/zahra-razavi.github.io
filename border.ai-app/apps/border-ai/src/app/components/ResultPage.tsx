import React from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { CheckCircle2, AlertCircle, Info, RotateCcw } from 'lucide-react';
import { QuestionnaireData } from './SetupQuestionnaire';

interface ResultPageProps {
  data: QuestionnaireData;
  onContinue: () => void;
  onReset: () => void;
}

export function ResultPage({ data, onContinue, onReset }: ResultPageProps) {
  // Calculate approval chance based on answers
  const calculateApprovalChance = (): number => {
    let score = 50; // Base score

    // Study Permit scoring
    if (data.visaType === 'Canada Study Permit and Visa') {
      if (data.hasLOA === 'Yes, I have a valid LOA') score += 15;
      if (data.hasPAL === 'Yes, I have a PAL') score += 10;
      if (data.travelHistory?.includes('Yes')) score += 5;
      if (data.refusals === 'No, never refused') score += 10;
      if (data.studyPlanFit?.includes('clearly matches')) score += 10;
      if (data.proofOfFunds?.includes('Yes')) score += 15;
      if (data.fundsConsistency?.includes('Yes')) score += 10;
      if (data.applyFrom === 'From inside Canada') score += 5;
    }

    // Work Permit scoring
    if (data.visaType === 'Canada Work Permit and Visa') {
      if (data.jobOfferStatus === 'Yes, I have a job offer') score += 20;
      if (data.lmiaStatus === 'Yes, employer has LMIA') score += 15;
      if (data.workExperience?.includes('5+ years')) score += 10;
      if (data.travelHistory?.includes('Yes')) score += 5;
      if (data.refusals === 'No, never refused') score += 10;
      if (data.applyFrom === 'From inside Canada') score += 5;
    }

    // Visitor Visa scoring
    if (data.visaType === 'Canada Visitor Visa') {
      if (data.travelHistory?.includes('Yes')) score += 15;
      if (data.refusals === 'No, never refused') score += 15;
      if (data.tiesToHome?.includes('Strong')) score += 15;
      if (data.proofOfFunds?.includes('Yes')) score += 10;
      if (data.stayDuration?.includes('less than 2 weeks') || data.stayDuration?.includes('2-4 weeks')) score += 5;
    }

    return Math.min(Math.max(score, 0), 100);
  };

  const approvalChance = calculateApprovalChance();

  const getApprovalLevel = () => {
    if (approvalChance >= 80) return { label: 'High', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' };
    if (approvalChance >= 60) return { label: 'Moderate', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' };
    if (approvalChance >= 40) return { label: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' };
    return { label: 'Low', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
  };

  const level = getApprovalLevel();

  const getKeyRecommendations = () => {
    const recommendations = [];

    if (data.visaType === 'Canada Study Permit and Visa') {
      if (data.hasLOA !== 'Yes, I have a valid LOA') {
        recommendations.push('Obtain a valid Letter of Acceptance from a Designated Learning Institution (DLI)');
      }
      if (data.hasPAL !== 'Yes, I have a PAL') {
        recommendations.push('Secure a Provincial Attestation Letter (PAL) from your province');
      }
      if (!data.proofOfFunds?.includes('Yes')) {
        recommendations.push('Ensure you have sufficient proof of funds to cover tuition, living expenses, and travel');
      }
      if (!data.fundsConsistency?.includes('Yes')) {
        recommendations.push('Prepare explanation documents for any inconsistencies in your bank statements');
      }
      if (!data.studyPlanFit?.includes('clearly matches')) {
        recommendations.push('Prepare a strong Statement of Purpose explaining your study plan and career goals');
      }
    }

    if (data.visaType === 'Canada Work Permit and Visa') {
      if (data.jobOfferStatus !== 'Yes, I have a job offer') {
        recommendations.push('Secure a valid job offer from a Canadian employer');
      }
      if (data.lmiaStatus !== 'Yes, employer has LMIA') {
        recommendations.push('Ensure your employer obtains a Labour Market Impact Assessment (LMIA)');
      }
      if (!data.workExperience?.includes('years')) {
        recommendations.push('Document your work experience thoroughly with reference letters');
      }
    }

    if (data.visaType === 'Canada Visitor Visa') {
      if (!data.travelHistory?.includes('Yes')) {
        recommendations.push('Previous travel to visa-required countries strengthens your application');
      }
      if (!data.tiesToHome?.includes('Strong')) {
        recommendations.push('Strengthen documentation of ties to your home country (employment, property, family)');
      }
      if (!data.proofOfFunds?.includes('Yes')) {
        recommendations.push('Ensure adequate proof of funds for your stay in Canada');
      }
    }

    if (data.refusals !== 'No, never refused') {
      recommendations.push('Address previous refusals with detailed explanations and improved documentation');
    }

    return recommendations;
  };

  const recommendations = getKeyRecommendations();

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
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Your Application Assessment</h1>
              <p className="text-gray-600">
                Based on your answers, here's your personalized result
              </p>
            </div>

            {/* Visa Type */}
            <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <Info className="w-5 h-5 text-[#E9692C]" />
                <h2 className="text-lg font-semibold text-gray-900">Visa Type</h2>
              </div>
              <p className="text-xl font-medium text-[#E9692C]">{data.visaType}</p>
            </div>

            {/* Approval Chance */}
            <div className={`mb-8 p-6 ${level.bgColor} rounded-lg border ${level.borderColor}`}>
              <div className="flex items-center gap-3 mb-4">
                {approvalChance >= 60 ? (
                  <CheckCircle2 className={`w-6 h-6 ${level.color}`} />
                ) : (
                  <AlertCircle className={`w-6 h-6 ${level.color}`} />
                )}
                <h2 className="text-lg font-semibold text-gray-900">Estimated Approval Chance</h2>
              </div>
              <div className="flex items-end gap-4 mb-4">
                <div className="text-5xl font-bold text-gray-900">{approvalChance}%</div>
                <div className={`text-xl font-medium ${level.color} mb-2`}>{level.label}</div>
              </div>
              <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 transition-all duration-500 ${
                    approvalChance >= 80 ? 'bg-green-500' :
                    approvalChance >= 60 ? 'bg-blue-500' :
                    approvalChance >= 40 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${approvalChance}%` }}
                ></div>
              </div>
            </div>

            {/* Key Recommendations */}
            {recommendations.length > 0 && (
              <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Recommendations</h2>
                <ul className="space-y-3">
                  {recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>Disclaimer:</strong> This assessment is for informational purposes only and does not constitute legal advice. 
                Actual approval depends on many factors and is determined solely by Immigration, Refugees and Citizenship Canada (IRCC). 
                Border.ai is not affiliated with IRCC.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={onReset}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset and Repeat
              </Button>
              <Button
                onClick={onContinue}
                className="flex-1 bg-[#E9692C] hover:bg-[#d15a24] text-lg py-6"
              >
                Continue to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
