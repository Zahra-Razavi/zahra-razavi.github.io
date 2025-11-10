import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface FormData {
  creditCardProcessor: string;
  creditCardSalesPercent: string;
  requestedAmount: string;
  useOfProceeds: string;
  existingFundingPositions: string;
  documentType: string;
  documentFile: File | null;
  documentDescription: string;
}

const initialFormData: FormData = {
  creditCardProcessor: '',
  creditCardSalesPercent: '',
  requestedAmount: '',
  useOfProceeds: '',
  existingFundingPositions: '',
  documentType: '',
  documentFile: null,
  documentDescription: '',
};

export function FundingInformationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: keyof FormData, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, documentFile: file }));
  };

  const handleNext = () => {
    navigate('/onboarding/step-5');
  };

  const handleBack = () => {
    navigate('/onboarding/step-3');
  };

  return (
    <OnboardingLayout currentStep={4} totalSteps={5} title="Funding Information">
      <div className="space-y-12">
        {/* Credit Card Section */}
        <div className="space-y-6">
          <h2 className="text-center">Credit Card</h2>

          {/* Credit card processor */}
          <div className="space-y-2">
            <Label htmlFor="creditCardProcessor">Credit card processor *</Label>
            <Input
              id="creditCardProcessor"
              name="creditCardProcessor"
              value={formData.creditCardProcessor}
              onChange={(e) => handleChange('creditCardProcessor', e.target.value)}
              placeholder="e.g., Square, Stripe, PayPal"
            />
          </div>

          {/* Credit card sales % */}
          <div className="space-y-2">
            <Label htmlFor="creditCardSalesPercent">Credit card sales % *</Label>
            <div className="relative">
              <Input
                id="creditCardSalesPercent"
                name="creditCardSalesPercent"
                type="text"
                value={formData.creditCardSalesPercent}
                onChange={(e) => handleChange('creditCardSalesPercent', e.target.value)}
                className="pr-10"
                placeholder="0"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
        </div>

        {/* Funding Information Section */}
        <div className="space-y-6">
          <h2 className="text-center">Funding Information</h2>

          {/* Requested amount */}
          <div className="space-y-2">
            <Label htmlFor="requestedAmount">Requested amount *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <Input
                id="requestedAmount"
                name="requestedAmount"
                type="text"
                value={formData.requestedAmount}
                onChange={(e) => handleChange('requestedAmount', e.target.value)}
                className="pl-7"
                placeholder="0"
              />
            </div>
          </div>

          {/* Use of proceeds */}
          <div className="space-y-2">
            <Label htmlFor="useOfProceeds">
              Use of proceeds( Please provide as much detail as possible) *
            </Label>
            <Textarea
              id="useOfProceeds"
              name="useOfProceeds"
              value={formData.useOfProceeds}
              onChange={(e) => handleChange('useOfProceeds', e.target.value)}
              className="min-h-[120px] resize-none"
              placeholder="e.g., Purchase new equipment, expand inventory, hire additional staff, marketing campaign..."
            />
          </div>
        </div>

        {/* Existing Funding Positions Section */}
        <div className="space-y-6">
          <h2 className="text-center">Existing Funding Positions</h2>

          {/* No. of existing funding positions */}
          <div className="space-y-2">
            <Label htmlFor="existingFundingPositions">
              No. of existing funding positions
            </Label>
            <Input
              id="existingFundingPositions"
              name="existingFundingPositions"
              type="text"
              value={formData.existingFundingPositions}
              onChange={(e) => handleChange('existingFundingPositions', e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="space-y-6">
          <h2 className="text-center">Document Upload</h2>

          {/* Type */}
          <div className="space-y-2">
            <Label htmlFor="documentType">Type</Label>
            <Input
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={(e) => handleChange('documentType', e.target.value)}
              placeholder="Application form"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="file"
                  id="documentFile"
                  name="documentFile"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="bg-[#EBEDED] hover:bg-[#E0E0E0] border-[#E5E7EB]"
                  onClick={() => document.getElementById('documentFile')?.click()}
                >
                  Choose File
                </Button>
              </div>
              <span className="text-[#292929]">
                {formData.documentFile ? formData.documentFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="documentDescription">Description</Label>
            <Input
              id="documentDescription"
              name="documentDescription"
              value={formData.documentDescription}
              onChange={(e) => handleChange('documentDescription', e.target.value)}
              placeholder="Brief description of the document"
            />
          </div>

          {/* Upload Button */}
          <div className="flex justify-start">
            <Button
              type="button"
              variant="outline"
              className="bg-white hover:bg-gray-50 border-[#CCCBD7] min-w-[100px]"
            >
              Upload
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-4 pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="min-w-[150px]"
          >
            Back
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            className="min-w-[150px] bg-[#4E0F60] hover:bg-[#3D0B4D]"
          >
            Next
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}