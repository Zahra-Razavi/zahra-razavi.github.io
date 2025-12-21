import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ChevronLeft, ChevronRight, Save, HelpCircle } from 'lucide-react';
import { IntakeData } from '../App';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface IntakeWizardProps {
  onComplete: (data: IntakeData) => void;
  applicationType: string;
}

export function IntakeWizard({ onComplete, applicationType }: IntakeWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    goal: applicationType,
    personalInfo: {},
    travelHistory: {},
    finances: {},
    ties: {},
    background: {},
    constraints: {},
  });

  const steps = [
    { id: 'goal', title: 'Application Goal', description: 'Confirm your visa type' },
    { id: 'personal', title: 'Personal Information', description: 'Basic details' },
    { id: 'travel', title: 'Travel History', description: 'Previous trips' },
    { id: 'finances', title: 'Financial Information', description: 'Proof of funds' },
    { id: 'ties', title: 'Ties to Home Country', description: 'Strong connections' },
    { id: 'background', title: 'Education & Work', description: 'Your background' },
    { id: 'constraints', title: 'Constraints & Flags', description: 'Any concerns' },
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData as IntakeData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (section: string, data: any) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], ...data },
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>What type of visa are you applying for?</Label>
              <RadioGroup
                value={formData.goal}
                onValueChange={(value) => updateFormData('goal', { type: value })}
              >
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="study" id="study" />
                  <Label htmlFor="study" className="flex-1 cursor-pointer font-normal">
                    Study Permit
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="work" id="work" />
                  <Label htmlFor="work" className="flex-1 cursor-pointer font-normal">
                    Work Permit
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="visit" id="visit" />
                  <Label htmlFor="visit" className="flex-1 cursor-pointer font-normal">
                    Visitor Visa
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="pr" id="pr" />
                  <Label htmlFor="pr" className="flex-1 cursor-pointer font-normal">
                    Permanent Residency
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specificProgram">Specific Program (if known)</Label>
              <Input
                id="specificProgram"
                placeholder="e.g., Express Entry, Study Permit for University"
                value={formData.goal.program || ''}
                onChange={(e) => updateFormData('goal', { program: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="intendedDate">Intended Start Date</Label>
              <Input
                id="intendedDate"
                type="date"
                value={formData.goal.startDate || ''}
                onChange={(e) => updateFormData('goal', { startDate: e.target.value })}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="As shown in passport"
                  value={formData.personalInfo.firstName || ''}
                  onChange={(e) => updateFormData('personalInfo', { firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="As shown in passport"
                  value={formData.personalInfo.lastName || ''}
                  onChange={(e) => updateFormData('personalInfo', { lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.personalInfo.dateOfBirth || ''}
                onChange={(e) => updateFormData('personalInfo', { dateOfBirth: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Select
                value={formData.personalInfo.nationality || ''}
                onValueChange={(value) => updateFormData('personalInfo', { nationality: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="philippines">Philippines</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select
                value={formData.personalInfo.maritalStatus || ''}
                onValueChange={(value) => updateFormData('personalInfo', { maritalStatus: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="common-law">Common-law</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label>Have you traveled internationally before?</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-xs">
                        Travel history helps establish your credibility. Include all international trips in the last 10 years.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <RadioGroup
                value={formData.travelHistory.hasTraveled || 'no'}
                onValueChange={(value) => updateFormData('travelHistory', { hasTraveled: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="travel-yes" />
                  <Label htmlFor="travel-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="travel-no" />
                  <Label htmlFor="travel-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.travelHistory.hasTraveled === 'yes' && (
              <>
                <div className="space-y-2">
                  <Label>Which countries have you visited? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {['USA', 'UK', 'Australia', 'Schengen Area', 'Other'].map((country) => (
                      <div key={country} className="flex items-center space-x-2">
                        <Checkbox id={`country-${country}`} />
                        <Label htmlFor={`country-${country}`} className="font-normal text-sm">
                          {country}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelDetails">Travel Details</Label>
                  <Textarea
                    id="travelDetails"
                    placeholder="List countries visited, approximate dates, and purpose (e.g., USA - Jan 2023, Tourism)"
                    rows={4}
                    value={formData.travelHistory.details || ''}
                    onChange={(e) => updateFormData('travelHistory', { details: e.target.value })}
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label>Have you ever been refused a visa to Canada or any other country?</Label>
              <RadioGroup
                value={formData.travelHistory.visaRefusal || 'no'}
                onValueChange={(value) => updateFormData('travelHistory', { visaRefusal: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="refusal-yes" />
                  <Label htmlFor="refusal-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="refusal-no" />
                  <Label htmlFor="refusal-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                💡 Financial requirements vary by visa type. For study permits, you typically need to show CAD $10,000+ (plus tuition) for the first year.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="availableFunds">Available Funds (CAD)</Label>
              <Input
                id="availableFunds"
                type="number"
                placeholder="20000"
                value={formData.finances.available || ''}
                onChange={(e) => updateFormData('finances', { available: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Source of Funds (Select all that apply)</Label>
              <div className="space-y-2">
                {['Personal Savings', 'Family Support', 'Scholarship', 'Loan', 'Employment Income'].map((source) => (
                  <div key={source} className="flex items-center space-x-2">
                    <Checkbox id={`source-${source}`} />
                    <Label htmlFor={`source-${source}`} className="font-normal text-sm">
                      {source}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employmentStatus">Current Employment Status</Label>
              <Select
                value={formData.finances.employment || ''}
                onValueChange={(value) => updateFormData('finances', { employment: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employed">Employed Full-time</SelectItem>
                  <SelectItem value="self-employed">Self-employed</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="unemployed">Currently Unemployed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Do you have a sponsor for your application?</Label>
              <RadioGroup
                value={formData.finances.hasSponsor || 'no'}
                onValueChange={(value) => updateFormData('finances', { hasSponsor: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="sponsor-yes" />
                  <Label htmlFor="sponsor-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="sponsor-no" />
                  <Label htmlFor="sponsor-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                💡 Strong ties to your home country demonstrate your intent to return after your authorized stay in Canada.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Do you own property in your home country?</Label>
              <RadioGroup
                value={formData.ties.ownsProperty || 'no'}
                onValueChange={(value) => updateFormData('ties', { ownsProperty: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="property-yes" />
                  <Label htmlFor="property-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="property-no" />
                  <Label htmlFor="property-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Do you have family members in your home country?</Label>
              <div className="space-y-2">
                {['Spouse/Partner', 'Parents', 'Siblings', 'Children', 'None'].map((member) => (
                  <div key={member} className="flex items-center space-x-2">
                    <Checkbox id={`family-${member}`} />
                    <Label htmlFor={`family-${member}`} className="font-normal text-sm">
                      {member}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employmentTies">Employment or Business Ties</Label>
              <Textarea
                id="employmentTies"
                placeholder="Describe your job, business, or other professional commitments in your home country"
                rows={3}
                value={formData.ties.employment || ''}
                onChange={(e) => updateFormData('ties', { employment: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="otherTies">Other Ties (Optional)</Label>
              <Textarea
                id="otherTies"
                placeholder="Community involvement, ongoing education, pending legal matters, etc."
                rows={3}
                value={formData.ties.other || ''}
                onChange={(e) => updateFormData('ties', { other: e.target.value })}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="highestEducation">Highest Level of Education</Label>
              <Select
                value={formData.background.education || ''}
                onValueChange={(value) => updateFormData('background', { education: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="college">College/Diploma</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD/Doctorate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy">Field of Study</Label>
              <Input
                id="fieldOfStudy"
                placeholder="e.g., Computer Science, Business Administration"
                value={formData.background.field || ''}
                onChange={(e) => updateFormData('background', { field: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workExperience">Years of Work Experience</Label>
              <Input
                id="workExperience"
                type="number"
                placeholder="0"
                value={formData.background.experience || ''}
                onChange={(e) => updateFormData('background', { experience: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentOccupation">Current/Most Recent Occupation</Label>
              <Input
                id="currentOccupation"
                placeholder="Job title or profession"
                value={formData.background.occupation || ''}
                onChange={(e) => updateFormData('background', { occupation: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languageProficiency">Language Proficiency</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="lang-english" />
                  <Label htmlFor="lang-english" className="font-normal text-sm">
                    English (IELTS/TOEFL taken or planned)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lang-french" />
                  <Label htmlFor="lang-french" className="font-normal text-sm">
                    French (TEF/TCF taken or planned)
                  </Label>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-gray-700">
                ⚠️ Answer honestly. Providing false information can result in application refusal and future bans.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Do you have any criminal convictions?</Label>
              <RadioGroup
                value={formData.constraints.criminalRecord || 'no'}
                onValueChange={(value) => updateFormData('constraints', { criminalRecord: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="criminal-yes" />
                  <Label htmlFor="criminal-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="criminal-no" />
                  <Label htmlFor="criminal-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Do you have any serious medical conditions?</Label>
              <RadioGroup
                value={formData.constraints.medicalIssues || 'no'}
                onValueChange={(value) => updateFormData('constraints', { medicalIssues: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="medical-yes" />
                  <Label htmlFor="medical-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="medical-no" />
                  <Label htmlFor="medical-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Have you served in the military or any armed group?</Label>
              <RadioGroup
                value={formData.constraints.militaryService || 'no'}
                onValueChange={(value) => updateFormData('constraints', { militaryService: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="military-yes" />
                  <Label htmlFor="military-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="military-no" />
                  <Label htmlFor="military-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information or Concerns (Optional)</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Anything else we should know about your case? (e.g., gaps in employment, previous visa issues, urgent timelines)"
                rows={4}
                value={formData.constraints.additional || ''}
                onChange={(e) => updateFormData('constraints', { additional: e.target.value })}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="mb-2">Application Intake</h1>
        <p className="text-gray-600">
          Help us understand your case by answering these questions
        </p>
      </div>

      {/* Progress */}
      <Card className="p-6 mb-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center min-w-[100px] ${
                index <= currentStep ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mb-1 ${
                  index < currentStep
                    ? 'bg-green-500 text-white'
                    : index === currentStep
                    ? 'bg-[#E9692C] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs text-center">{step.title}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Current Step Content */}
      <Card className="p-6 mb-6">
        <div className="mb-6">
          <h2 className="mb-1">{steps[currentStep].title}</h2>
          <p className="text-sm text-gray-600">{steps[currentStep].description}</p>
        </div>

        {renderStep()}
      </Card>

      {/* Case Summary Sidebar */}
      <Card className="p-4 mb-6 bg-gray-50">
        <h4 className="text-sm mb-3">Case Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Application Type:</span>
            <span className="font-medium capitalize">{formData.goal.type || applicationType}</span>
          </div>
          {formData.personalInfo.firstName && (
            <div className="flex justify-between">
              <span className="text-gray-600">Applicant:</span>
              <span className="font-medium">
                {formData.personalInfo.firstName} {formData.personalInfo.lastName}
              </span>
            </div>
          )}
          {formData.personalInfo.nationality && (
            <div className="flex justify-between">
              <span className="text-gray-600">Nationality:</span>
              <span className="font-medium capitalize">{formData.personalInfo.nationality}</span>
            </div>
          )}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Button variant="outline">
          <Save className="w-4 h-4 mr-2" />
          Save & Continue Later
        </Button>

        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? (
            'Complete Intake'
          ) : (
            <>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
