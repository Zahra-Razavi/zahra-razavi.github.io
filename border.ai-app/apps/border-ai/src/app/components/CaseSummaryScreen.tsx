import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { CheckCircle2, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { IntakeData } from '../App';
import { OfficialSourcesPanel } from './OfficialSourcesPanel';

interface CaseSummaryScreenProps {
  intakeData: IntakeData | null;
  onContinue: () => void;
}

export function CaseSummaryScreen({ intakeData, onContinue }: CaseSummaryScreenProps) {
  // AI-generated eligibility hints
  const eligibilityScore = 75; // Mock score
  const isEligible = eligibilityScore >= 60;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="mb-2">Case Summary</h1>
        <p className="text-gray-600">
          Based on your intake responses, here's our initial assessment
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Eligibility Assessment */}
          <Card className="p-6">
            <h2 className="mb-4">Eligibility Assessment</h2>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span>Overall Eligibility Score</span>
                <span className="text-2xl font-semibold text-[#E9692C]">{eligibilityScore}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#E9692C] h-3 rounded-full transition-all"
                  style={{ width: `${eligibilityScore}%` }}
                />
              </div>
            </div>

            {isEligible ? (
              <Alert className="bg-green-50 border-green-200 mb-4">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Good news!</strong> Based on your responses, you appear to meet the basic eligibility requirements for a study permit. Let's continue building your application.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert className="bg-amber-50 border-amber-200 mb-4">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Attention needed:</strong> Your application may face some challenges. We'll help you address these areas to strengthen your case.
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-900">Strong Financial Profile</p>
                  <p className="text-sm text-green-700">
                    Your available funds exceed the minimum requirements for a study permit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-900">Clear Intent to Study</p>
                  <p className="text-sm text-green-700">
                    Your educational background aligns well with your proposed program of study.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-900">Limited Travel History</p>
                  <p className="text-sm text-amber-700">
                    Consider documenting any international travel to strengthen your credibility. If you haven't traveled, we'll help you address this in your Letter of Explanation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Strong Ties to Home Country</p>
                  <p className="text-sm text-blue-700">
                    Your family and employment ties demonstrate intent to return after studies.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Risk Flags */}
          <Card className="p-6">
            <h3 className="mb-4">Risk Flags & Mitigation</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-amber-400 pl-4">
                <h4 className="text-sm mb-1">No Previous Visa Refusals ✓</h4>
                <p className="text-sm text-gray-600">
                  You have no history of visa refusals, which is positive for your application.
                </p>
              </div>

              <div className="border-l-4 border-amber-400 pl-4">
                <h4 className="text-sm mb-1">Criminal Record Check</h4>
                <p className="text-sm text-gray-600 mb-2">
                  You indicated no criminal record. You'll need to provide a police certificate as part of your application.
                </p>
                <Badge variant="outline" className="text-xs">Action Required</Badge>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="text-sm mb-1">Medical Requirements</h4>
                <p className="text-sm text-gray-600">
                  No serious medical issues reported. Standard medical exam will be required.
                </p>
              </div>
            </div>
          </Card>

          {/* Recommended Pathway */}
          <Card className="p-6">
            <h3 className="mb-4">Recommended Pathway</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E9692C] text-white flex items-center justify-center text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-sm">Apply for Study Permit</p>
                  <p className="text-sm text-gray-600">
                    Based on your Letter of Acceptance and financial capacity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E9692C] text-white flex items-center justify-center text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-sm">Apply through Student Direct Stream (SDS)</p>
                  <p className="text-sm text-gray-600">
                    Faster processing for students from eligible countries (including India, China, Philippines)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E9692C] text-white flex items-center justify-center text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-sm">Include Work Permit Request</p>
                  <p className="text-sm text-gray-600">
                    You may be eligible for a work permit while studying (20 hours/week)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Estimated Processing Time:</strong> 8-12 weeks (SDS) or 12-16 weeks (Regular)
              </p>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-4">
            <h4 className="text-sm mb-3">Your Information</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-gray-600">Application Type</p>
                <p className="font-medium capitalize">{intakeData?.goal || 'Study Permit'}</p>
              </div>
              <div>
                <p className="text-gray-600">Nationality</p>
                <p className="font-medium capitalize">{intakeData?.personalInfo?.nationality || 'India'}</p>
              </div>
              <div>
                <p className="text-gray-600">Available Funds</p>
                <p className="font-medium">CAD {intakeData?.finances?.available || '25,000'}</p>
              </div>
              <div>
                <p className="text-gray-600">Education Level</p>
                <p className="font-medium capitalize">{intakeData?.background?.education || 'Bachelor\'s'}</p>
              </div>
            </div>
          </Card>

          <OfficialSourcesPanel />

          <Card className="p-4 bg-[#E9692C]/5 border-[#E9692C]/20">
            <h4 className="text-sm mb-2">Ready to Continue?</h4>
            <p className="text-sm text-gray-700 mb-4">
              We'll now create a detailed project plan with timeline, checklist, and document requirements.
            </p>
            <Button className="w-full" onClick={onContinue}>
              Create Project Plan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}