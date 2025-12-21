import React, { useState } from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { ChevronDown, ChevronUp, Edit } from 'lucide-react';
import { QuestionnaireData } from './SetupQuestionnaire';

interface ReviewPageProps {
  data: QuestionnaireData;
  onSeeResult: () => void;
  onEditAnswers: () => void;
}

export function ReviewPage({ data, onSeeResult, onEditAnswers }: ReviewPageProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['basic']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const sections = [
    {
      id: 'basic',
      title: 'Basic Information',
      items: [
        { label: 'Destination Country', value: data.country },
        { label: 'Your Nationality', value: data.nationality },
        { label: 'Purpose of Visit', value: data.purpose },
        { label: 'Visa Type', value: data.visaType },
      ],
    },
  ];

  // Add Study-specific section
  if (data.visaType === 'Canada Study Permit and Visa') {
    sections.push({
      id: 'study',
      title: 'Study Permit Details',
      items: [
        { label: 'Study Situation', value: data.studySituation },
        { label: 'Applying From', value: data.applyFrom },
        { label: 'Travel History', value: data.travelHistory },
        { label: 'Previous Refusals', value: data.refusals },
        { label: 'Program Length', value: data.programLength },
        { label: 'Letter of Acceptance', value: data.hasLOA },
        { label: 'Study Province', value: data.studyProvince },
        { label: 'Provincial Attestation Letter', value: data.hasPAL },
        { label: 'Study Plan Fit', value: data.studyPlanFit },
        { label: 'Accompanying Family', value: data.accompanyingFamily },
        { label: 'Proof of Funds', value: data.proofOfFunds },
        { label: 'Proof of Funds Documents', value: data.proofOfFundsDocuments?.join(', ') },
        { label: 'Funds Consistency', value: data.fundsConsistency },
      ],
    });
  }

  // Add Work-specific section
  if (data.visaType === 'Canada Work Permit and Visa') {
    sections.push({
      id: 'work',
      title: 'Work Permit Details',
      items: [
        { label: 'Work Situation', value: data.workSituation },
        { label: 'Applying From', value: data.applyFrom },
        { label: 'Job Offer Status', value: data.jobOfferStatus },
        { label: 'LMIA Status', value: data.lmiaStatus },
        { label: 'Work Experience', value: data.workExperience },
        { label: 'Travel History', value: data.travelHistory },
        { label: 'Previous Refusals', value: data.refusals },
      ],
    });
  }

  // Add Visitor-specific section
  if (data.visaType === 'Canada Visitor Visa') {
    sections.push({
      id: 'visitor',
      title: 'Visitor Visa Details',
      items: [
        { label: 'Visit Purpose', value: data.visitPurpose },
        { label: 'Applying From', value: data.applyFrom },
        { label: 'Stay Duration', value: data.stayDuration },
        { label: 'Travel History', value: data.travelHistory },
        { label: 'Previous Refusals', value: data.refusals },
        { label: 'Ties to Home Country', value: data.tiesToHome },
        { label: 'Proof of Funds', value: data.proofOfFunds },
      ],
    });
  }

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
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Review Complete</h1>
              <p className="text-gray-600">
                Review your answers below before seeing your results
              </p>
            </div>

            {/* Answer Summary Accordion */}
            <div className="space-y-3 mb-8">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{section.title}</span>
                    {expandedSections.has(section.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {expandedSections.has(section.id) && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <div className="space-y-3">
                        {section.items.map((item, idx) => (
                          item.value && (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2">
                              <span className="text-sm font-medium text-gray-600 min-w-[200px]">
                                {item.label}:
                              </span>
                              <span className="text-sm text-gray-900">{item.value}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
              <Button
                variant="outline"
                onClick={onEditAnswers}
                className="flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Answers
              </Button>
              <Button
                onClick={onSeeResult}
                className="flex-1 bg-[#E9692C] hover:bg-[#d15a24]"
              >
                See Result
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
