import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';

interface FormData {
  acceptTerms: boolean;
  signature: string;
}

const initialFormData: FormData = {
  acceptTerms: false,
  signature: '',
};

export function SignaturePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // In a real application, this would submit the onboarding data
    // Navigate to dashboard selector to choose between broker/lender
    navigate('/select-dashboard');
  };

  const handleBack = () => {
    navigate('/onboarding/step-4');
  };

  return (
    <OnboardingLayout currentStep={5} totalSteps={5} title="Signature">
      <div className="space-y-8">
        {/* Authorization Text */}
        <div className="space-y-6">
          <p className="text-[#292929] leading-relaxed">
            Banana Marketplace LLC, requires your authorization to smartly match your application with suitable funders and share the application data with them. Please read our terms and conditions and accept below.
          </p>

          {/* Accept Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => handleChange('acceptTerms', checked as boolean)}
              className="mt-0.5"
            />
            <label
              htmlFor="acceptTerms"
              className="text-[#080808] cursor-pointer select-none leading-relaxed"
            >
              I accept the terms and conditions
            </label>
          </div>
        </div>

        {/* Declaration Text */}
        <div className="space-y-4">
          <p className="text-[#292929] leading-relaxed">
            You hereby approve that all data and documents provided in this application form are true, accurate, current and complete in all respects, and that no false, inaccurate or misleading statements or material misrepresentations are included in the data or documents, nor do they omit any material information necessary to make such data true, accurate, current and complete in all respects.
          </p>
        </div>

        {/* Signature Field */}
        <div className="space-y-2">
          <Label htmlFor="signature">Signature *</Label>
          <Input
            id="signature"
            name="signature"
            value={formData.signature}
            onChange={(e) => handleChange('signature', e.target.value)}
            placeholder="Type your full name"
            className="bg-white border-[#DBDFE3]"
          />
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
            onClick={handleSubmit}
            disabled={!formData.acceptTerms || !formData.signature}
            className="min-w-[150px] bg-[#4E0F60] hover:bg-[#3D0B4D] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}