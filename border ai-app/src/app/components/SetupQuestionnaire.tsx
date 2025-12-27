import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Logo } from './Logo';

export interface QuestionnaireData {
  country: string;
  nationality: string;
  purpose?: string;
  visaType?: string;
  [key: string]: any;
}

interface SetupQuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void;
}

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde',
  'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
  'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
  'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt',
  'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji',
  'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece',
  'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North',
  'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
  'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan',
  'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
  'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
  'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
  'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
  'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen',
  'Zambia', 'Zimbabwe'
];

export function SetupQuestionnaire({ onComplete }: SetupQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [data, setData] = useState<QuestionnaireData>({
    country: '',
    nationality: '',
  });

  const updateData = (key: string, value: any) => {
    setData({ ...data, [key]: value });
  };

  const handleNext = () => {
    // Q1 (Country) → Q2 (Nationality)
    if (currentQuestion === 1 && data.country) {
      setCurrentQuestion(2);
    }
    // Q2 (Nationality) → Q3 (Purpose) if Canada
    else if (currentQuestion === 2 && data.nationality) {
      if (data.country === 'Canada') {
        setCurrentQuestion(3);
      } else {
        onComplete(data);
      }
    }
    // Q3 (Purpose) → Branch based on selection
    else if (currentQuestion === 3 && data.purpose) {
      if (data.purpose === 'Study') {
        updateData('visaType', 'Canada Study Permit and Visa');
        setCurrentQuestion(4); // Start Study flow
      } else if (data.purpose === 'Work') {
        updateData('visaType', 'Canada Work Permit and Visa');
        setCurrentQuestion(104); // Start Work flow
      } else if (data.purpose === 'Visit family and Friends/ Tourism/ Business visit') {
        updateData('visaType', 'Canada Visitor Visa');
        setCurrentQuestion(204); // Start Visitor flow
      }
    }
    // Study flow questions (4-16)
    else if (currentQuestion >= 4 && currentQuestion <= 15) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // Study flow end → Complete
    else if (currentQuestion === 16) {
      onComplete(data);
    }
    // Work flow questions (104-111)
    else if (currentQuestion >= 104 && currentQuestion <= 110) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // Work flow end → Complete
    else if (currentQuestion === 111) {
      onComplete(data);
    }
    // Visitor flow questions (204-210)
    else if (currentQuestion >= 204 && currentQuestion <= 209) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // Visitor flow end → Complete
    else if (currentQuestion === 210) {
      onComplete(data);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 4 || currentQuestion === 104 || currentQuestion === 204) {
      // Back to purpose selection
      setCurrentQuestion(3);
    } else if (currentQuestion === 3) {
      // Back to nationality
      setCurrentQuestion(2);
    } else if (currentQuestion === 2) {
      // Back to country
      setCurrentQuestion(1);
    } else if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const canProceed = () => {
    if (currentQuestion === 1) return !!data.country;
    if (currentQuestion === 2) return !!data.nationality;
    if (currentQuestion === 3) return !!data.purpose;
    if (currentQuestion === 4) return !!data.studySituation;
    if (currentQuestion === 5) return !!data.applyFrom;
    if (currentQuestion === 6) return !!data.travelHistory;
    if (currentQuestion === 7) return !!data.refusals;
    if (currentQuestion === 8) return !!data.programLength;
    if (currentQuestion === 9) return !!data.hasLOA;
    if (currentQuestion === 10) return !!data.studyProvince;
    if (currentQuestion === 11) return !!data.hasPAL;
    if (currentQuestion === 12) return !!data.studyPlanFit;
    if (currentQuestion === 13) return !!data.accompanyingFamily;
    if (currentQuestion === 14) return !!data.proofOfFunds;
    if (currentQuestion === 15) return !!data.proofOfFundsDocuments;
    if (currentQuestion === 16) return !!data.fundsConsistency;
    
    // Work flow
    if (currentQuestion === 104) return !!data.workSituation;
    if (currentQuestion === 105) return !!data.workPermitType;
    if (currentQuestion === 106) return !!data.applyFrom;
    if (currentQuestion === 107) return !!data.jobOfferStatus;
    if (currentQuestion === 108) return !!data.lmiaStatus;
    if (currentQuestion === 109) return !!data.workExperience;
    if (currentQuestion === 110) return !!data.travelHistory;
    if (currentQuestion === 111) return !!data.refusals;
    
    // Visitor flow
    if (currentQuestion === 204) return !!data.visitPurpose;
    if (currentQuestion === 205) return !!data.applyFrom;
    if (currentQuestion === 206) return !!data.stayDuration;
    if (currentQuestion === 207) return !!data.travelHistory;
    if (currentQuestion === 208) return !!data.refusals;
    if (currentQuestion === 209) return !!data.tiesToHome;
    if (currentQuestion === 210) return !!data.proofOfFunds;
    
    return false;
  };

  const getTotalQuestions = () => {
    if (data.visaType === 'Canada Study Permit and Visa') return 16;
    if (data.visaType === 'Canada Work Permit and Visa') return 11;
    if (data.visaType === 'Canada Visitor Visa') return 10;
    if (data.country === 'Canada') return 3;
    return 2;
  };

  const getCurrentQuestionNumber = () => {
    // Questions 1-3 are always sequential
    if (currentQuestion >= 1 && currentQuestion <= 3) return currentQuestion;
    
    // Study flow (4-16) → Display as 4-16
    if (currentQuestion >= 4 && currentQuestion <= 16) return currentQuestion;
    
    // Work flow (104-111) → Display as 4-11
    if (currentQuestion >= 104 && currentQuestion <= 111) {
      return currentQuestion - 100; // 104→4, 105→5, ..., 111→11
    }
    
    // Visitor flow (204-210) → Display as 4-10
    if (currentQuestion >= 204 && currentQuestion <= 210) {
      return currentQuestion - 200; // 204→4, 205→5, ..., 210→10
    }
    
    return currentQuestion;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b bg-white">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
                </span>
                <span className="text-sm font-medium text-[#E9692C]">
                  {Math.round((getCurrentQuestionNumber() / getTotalQuestions()) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#E9692C] h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(getCurrentQuestionNumber() / getTotalQuestions()) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question 1 */}
            {currentQuestion === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What country/region are you applying for?
                </h2>
                <div className="space-y-3">
                  {['Canada', 'US', 'Schengen'].map((country) => (
                    <button
                      key={country}
                      onClick={() => country === 'Canada' && updateData('country', country)}
                      disabled={country !== 'Canada'}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all relative ${
                        data.country === country
                          ? 'border-[#E9692C] bg-orange-50'
                          : country === 'Canada'
                          ? 'border-gray-200 hover:border-gray-300'
                          : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${country !== 'Canada' ? 'text-gray-500' : ''}`}>
                          {country}
                        </span>
                        {country !== 'Canada' && (
                          <span className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded">
                            Coming soon
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question 2 */}
            {currentQuestion === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What is your nationality (based on the passport you want to apply with)?
                </h2>
                <Select value={data.nationality} onValueChange={(value) => updateData('nationality', value)}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Select your nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Question 3 */}
            {currentQuestion === 3 && data.country === 'Canada' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What do you plan to do in Canada?
                </h2>
                <div className="space-y-3">
                  {[
                    'Study',
                    'Work',
                    'Visit family and Friends/ Tourism/ Business visit',
                  ].map((purpose) => (
                    <button
                      key={purpose}
                      onClick={() => updateData('purpose', purpose)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.purpose === purpose
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{purpose}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STUDY FLOW */}
            {currentQuestion === 4 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-[#E9692C] mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#E9692C]">
                        Your visa type is Canada Study Permit and Visa
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        Answer the rest of the questions to see whether you are eligible and what is your chance of approval.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Select the option that best matches your situation
                </h2>
                <div className="space-y-3">
                  {[
                    "I'm applying for my first study permit",
                    'I have my first study permit',
                    "I've extended or plan to extend my study permit",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('studySituation', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.studySituation === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 5 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Where will you apply from?
                </h2>
                <div className="space-y-3">
                  {['Outside Canada', 'Inside Canada', 'Not sure'].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('applyFrom', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.applyFrom === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 6 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Travel history (last 10 years)
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Have you previously held a visa or entry permission for any of the following: Canada / USA / UK / Schengen? (multi-select)
                </h2>
                <div className="space-y-3">
                  {[
                    'Yes, I had a Canada visa',
                    'Yes, I had a USA visa',
                    'Yes, I had a UK visa',
                    'Yes, I had a Schengen visa',
                    'No, I have not had any of these',
                    "I'm not sure / I don't remember",
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Checkbox
                        id={`travel-${option}`}
                        checked={data.travelHistory?.includes(option)}
                        onCheckedChange={(checked) => {
                          const current = data.travelHistory || [];
                          if (checked) {
                            updateData('travelHistory', [...current, option]);
                          } else {
                            updateData('travelHistory', current.filter((item: string) => item !== option));
                          }
                        }}
                      />
                      <Label htmlFor={`travel-${option}`} className="flex-1 cursor-pointer text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 7 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Previous refusals or immigration issues *
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Have you ever had any of these?</h2>
                <div className="space-y-3">
                  {[
                    'No, never refused, never overstayed',
                    'Yes, my visa/permit was refused (Canada or another country)',
                    'Yes, I overstayed / violated conditions in any country',
                    'Yes, I was denied entry at a border',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('refusals', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.refusals === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 8 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Program length
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">How long is your program in Canada?</h2>
                <p className="text-sm text-gray-700 italic">(A study permit is generally for programs longer than 6 months.)</p>
                <div className="space-y-3 mt-4">
                  {[
                    'More than 6 months',
                    '6 months or less',
                    'Not sure yet',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('programLength', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.programLength === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 9 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Letter of Acceptance (LOA) from a DLI
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Do you have a Letter of Acceptance from a Designated Learning Institution (DLI)?
                </h2>
                <div className="space-y-3">
                  {[
                    'Yes, I have an LOA from a DLI',
                    "I have an LOA but I'm not sure if the school is a DLI",
                    "No, I don't have an LOA yet",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('hasLOA', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.hasLOA === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 10 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Province/territory of study
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Where will you study?</h2>
                <p className="text-sm text-gray-700 italic">(If you'll study in Quebec, you also need a CAQ.)</p>
                <div className="space-y-3 mt-4">
                  {[
                    'Quebec',
                    'Other province/territory (not Quebec)',
                    'Not decided yet',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('studyProvince', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.studyProvince === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 11 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Provincial/Territorial Attestation Letter (PAL/TAL)
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Can you provide a PAL/TAL (Click here to see if it's required for your case.)?
                </h2>
                <p className="text-sm text-gray-700 italic">
                  (Most study permit applicants must include a PAL/TAL. If required and missing, the application may be returned.)
                </p>
                <div className="space-y-3 mt-4">
                  {[
                    'Yes, I have a PAL/TAL',
                    'Not yet, but my school will provide it',
                    "I'm exempt (I can provide proof of exemption)",
                    "I don't know",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('hasPAL', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.hasPAL === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 12 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Study plan fit
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Which best describes your study plan?</h2>
                <div className="space-y-3">
                  {[
                    'The program clearly matches my previous education/work and goals',
                    'Somewhat related, I can explain the reason for the change',
                    'Not clearly related, I will need a strong explanation',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('studyPlanFit', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.studyPlanFit === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 13 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Accompanying family members
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Will any family members come with you to Canada?</h2>
                <p className="text-sm text-gray-700 italic">(Funds are assessed for you and accompanying family members.)</p>
                <div className="space-y-3 mt-4">
                  {[
                    "No, I'm applying alone",
                    'Yes, spouse/partner',
                    'Yes, child(ren)',
                    'Yes, spouse/partner + child(ren)',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('accompanyingFamily', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.accompanyingFamily === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 14 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Proof of funds, minimum living expenses guideline (outside Quebec)
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Can you show funds to cover tuition + living expenses + travel?
                </h2>
                <div className="mb-4 mt-2 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-[#E9692C] mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#E9692C] mb-2">
                        For applications on or after Sep 1, 2025, required living expenses (excluding tuition + travel) are:
                      </p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• 1 person: CAD 22,895 / year</li>
                        <li>• 2 people: CAD 28,502 / year</li>
                        <li>• 3 people: CAD 35,040 / year</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2 italic">
                        (Outside Quebec; Quebec uses different amounts via CAQ/MIFI.)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Yes, I can meet/exceed the required amount (plus tuition + travel)',
                    'Maybe, but it will be tight',
                    "No, I can't meet it",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('proofOfFunds', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.proofOfFunds === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 15 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Proof of funds documents
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Which proofs can you provide? (multi-select)</h2>
                <div className="space-y-3 mt-4">
                  {[
                    'Bank statements (Canadian or foreign) for the past 4 months',
                    'Proof of tuition and housing fees paid',
                    'GIC (Guaranteed Investment Certificate) from a participating Canadian financial institution',
                    'Student/education loan approval',
                    'Scholarship / funded program proof',
                    "Sponsor letter (person/institution) + sponsor's proof of funds",
                    'Other (explain)',
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Checkbox
                        id={`proof-${option}`}
                        checked={data.proofOfFundsDocuments?.includes(option)}
                        onCheckedChange={(checked) => {
                          const current = data.proofOfFundsDocuments || [];
                          if (checked) {
                            updateData('proofOfFundsDocuments', [...current, option]);
                          } else {
                            updateData('proofOfFundsDocuments', current.filter((item: string) => item !== option));
                          }
                        }}
                      />
                      <Label htmlFor={`proof-${option}`} className="flex-1 cursor-pointer text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 16 && data.visaType === 'Canada Study Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">Consistency of funds</p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Will your bank history look consistent with your declared income/source of funds?
                </h2>
                <div className="space-y-3">
                  {[
                    'Yes, deposits and spending match my income/source',
                    'Mostly yes, but I can explain exceptions with documents',
                    'No, there are large/unexplained deposits or inconsistencies',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('fundsConsistency', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.fundsConsistency === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WORK FLOW */}
            {currentQuestion === 104 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-[#E9692C] mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#E9692C]">
                        Your visa type is Canada Work Permit and Visa
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        Answer the rest of the questions to see whether you are eligible and what is your chance of approval.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Select the option that best matches your situation
                </h2>
                <div className="space-y-3">
                  {[
                    "I'm applying for my first work permit",
                    'I have a work permit',
                    "I've extended or plan to extend my work permit",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('workSituation', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.workSituation === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 105 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What kind of work permit do you want to apply for?
                </h2>
                <div className="space-y-3">
                  {[
                    'Employer-specific (Closed) work permit',
                    'Open work permit (OWP)',
                    'Post-Graduation Work Permit (PGWP)',
                    'International Experience Canada (IEC)',
                    'Not sure',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('workPermitType', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.workPermitType === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 106 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Where will you apply from?
                </h2>
                <div className="space-y-3">
                  {['Outside Canada', 'Inside Canada', 'Not sure'].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('applyFrom', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.applyFrom === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 107 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Job offer status
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Do you have a job offer from a Canadian employer?</h2>
                <div className="space-y-3">
                  {[
                    'Yes, I have a job offer',
                    'I have a job offer, but not confirmed yet',
                    "No, I don't have a job offer yet",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('jobOfferStatus', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.jobOfferStatus === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 108 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  LMIA (Labour Market Impact Assessment)
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Does your employer have a positive LMIA?</h2>
                <p className="text-sm text-gray-700 italic">(Most work permits require an LMIA unless exempt.)</p>
                <div className="space-y-3 mt-4">
                  {[
                    'Yes, employer has LMIA',
                    'LMIA-exempt (e.g., CUSMA/NAFTA, IMP)',
                    'Not sure / LMIA in progress',
                    'No LMIA',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('lmiaStatus', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.lmiaStatus === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 109 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">Work experience</p>
                <h2 className="text-2xl font-semibold text-gray-900">How many years of relevant work experience do you have?</h2>
                <div className="space-y-3">
                  {[
                    'Less than 1 year',
                    '1-2 years',
                    '3-5 years',
                    '5+ years',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('workExperience', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.workExperience === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 110 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Travel history (last 10 years)
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Have you previously held a visa or entry permission for any of the following: Canada / USA / UK / Schengen? (multi-select)
                </h2>
                <div className="space-y-3">
                  {[
                    'Yes, I had a Canada visa',
                    'Yes, I had a USA visa',
                    'Yes, I had a UK visa',
                    'Yes, I had a Schengen visa',
                    'No, I have not had any of these',
                    "I'm not sure / I don't remember",
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Checkbox
                        id={`work-travel-${option}`}
                        checked={data.travelHistory?.includes(option)}
                        onCheckedChange={(checked) => {
                          const current = data.travelHistory || [];
                          if (checked) {
                            updateData('travelHistory', [...current, option]);
                          } else {
                            updateData('travelHistory', current.filter((item: string) => item !== option));
                          }
                        }}
                      />
                      <Label htmlFor={`work-travel-${option}`} className="flex-1 cursor-pointer text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 111 && data.visaType === 'Canada Work Permit and Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Previous refusals or immigration issues
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Have you ever had any of these?</h2>
                <div className="space-y-3">
                  {[
                    'No, never refused, never overstayed',
                    'Yes, my visa/permit was refused (Canada or another country)',
                    'Yes, I overstayed / violated conditions in any country',
                    'Yes, I was denied entry at a border',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('refusals', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.refusals === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VISITOR FLOW */}
            {currentQuestion === 204 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-[#E9692C] mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#E9692C]">
                        Your visa type is Canada Visitor Visa
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        Answer the rest of the questions to see whether you are eligible and what is your chance of approval.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Purpose of visit
                </h2>
                <div className="space-y-3">
                  {[
                    'Tourism / vacation',
                    'Visit family or friends',
                    'Business visit (meetings, conferences)',
                    'Medical treatment',
                    'Other',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('visitPurpose', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.visitPurpose === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 205 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Where will you apply from?
                </h2>
                <div className="space-y-3">
                  {['Outside Canada', 'Inside Canada', 'Not sure'].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('applyFrom', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.applyFrom === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 206 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Length of stay
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">How long do you plan to stay in Canada?</h2>
                <div className="space-y-3">
                  {[
                    'Less than 2 weeks',
                    '2-4 weeks',
                    '1-3 months',
                    '3-6 months',
                    'Not sure yet',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('stayDuration', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.stayDuration === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 207 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Travel history (last 10 years)
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Have you previously held a visa or entry permission for any of the following: Canada / USA / UK / Schengen? (multi-select)
                </h2>
                <div className="space-y-3">
                  {[
                    'Yes, I had a Canada visa',
                    'Yes, I had a USA visa',
                    'Yes, I had a UK visa',
                    'Yes, I had a Schengen visa',
                    'No, I have not had any of these',
                    "I'm not sure / I don't remember",
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Checkbox
                        id={`visitor-travel-${option}`}
                        checked={data.travelHistory?.includes(option)}
                        onCheckedChange={(checked) => {
                          const current = data.travelHistory || [];
                          if (checked) {
                            updateData('travelHistory', [...current, option]);
                          } else {
                            updateData('travelHistory', current.filter((item: string) => item !== option));
                          }
                        }}
                      />
                      <Label htmlFor={`visitor-travel-${option}`} className="flex-1 cursor-pointer text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 208 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Previous refusals or immigration issues
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Have you ever had any of these?</h2>
                <div className="space-y-3">
                  {[
                    'No, never refused, never overstayed',
                    'Yes, my visa/permit was refused (Canada or another country)',
                    'Yes, I overstayed / violated conditions in any country',
                    'Yes, I was denied entry at a border',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('refusals', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.refusals === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 209 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Ties to home country
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Which best describes your ties to your home country?</h2>
                <div className="space-y-3">
                  {[
                    'Strong ties (stable job, property, family)',
                    'Moderate ties (some of the above)',
                    'Weak ties (few connections to home country)',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('tiesToHome', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.tiesToHome === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion === 210 && data.visaType === 'Canada Visitor Visa' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-700">
                  Proof of funds
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Can you show sufficient funds for your stay in Canada?</h2>
                <div className="space-y-3">
                  {[
                    'Yes, I have sufficient funds (bank statements, pay stubs)',
                    'Maybe, but it will be tight',
                    "No, I don't have sufficient funds",
                    'Someone else will sponsor my trip',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateData('proofOfFunds', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        data.proofOfFunds === option
                          ? 'border-[#E9692C] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-[#E9692C] hover:bg-[#d15a24]"
              >
                {currentQuestion === 16 ? 'Continue' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
