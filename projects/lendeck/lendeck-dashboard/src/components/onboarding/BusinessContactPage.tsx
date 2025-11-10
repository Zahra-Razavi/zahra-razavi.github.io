import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { DemoSelect, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/demo-select';

interface FormData {
  firstName: string;
  lastName: string;
  businessPhone: string;
  mobilePhone: string;
  businessEmail: string;
  property: string;
  landlordFirstName: string;
  landlordLastName: string;
  landlordCompanyPhone: string;
  landlordCompanyName: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  businessPhone: '',
  mobilePhone: '',
  businessEmail: '',
  property: '',
  landlordFirstName: '',
  landlordLastName: '',
  landlordCompanyPhone: '',
  landlordCompanyName: '',
};

export function BusinessContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    navigate('/onboarding/step-3');
  };

  const handleBack = () => {
    navigate('/onboarding/step-1');
  };

  return (
    <OnboardingLayout currentStep={2} totalSteps={5} title="Business Contact">
      <div className="space-y-8">
        {/* Business Contact Section */}
        <div className="space-y-6">
          <h2 className="col-span-full text-center">Business Contact</h2>

          {/* First name */}
          <div className="space-y-2">
            <Label htmlFor="firstName">First name *</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              placeholder="John"
            />
          </div>

          {/* Last name */}
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name *</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              placeholder="Smith"
            />
          </div>

          {/* Business phone */}
          <div className="space-y-2">
            <Label htmlFor="businessPhone">Business phone *</Label>
            <Input
              id="businessPhone"
              name="businessPhone"
              type="tel"
              value={formData.businessPhone}
              onChange={(e) => handleChange('businessPhone', e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Mobile phone */}
          <div className="space-y-2">
            <Label htmlFor="mobilePhone">Mobile phone *</Label>
            <Input
              id="mobilePhone"
              name="mobilePhone"
              type="tel"
              value={formData.mobilePhone}
              onChange={(e) => handleChange('mobilePhone', e.target.value)}
              placeholder="(555) 987-6543"
            />
          </div>

          {/* Business email */}
          <div className="space-y-2">
            <Label htmlFor="businessEmail">Business email *</Label>
            <Input
              id="businessEmail"
              name="businessEmail"
              type="email"
              value={formData.businessEmail}
              onChange={(e) => handleChange('businessEmail', e.target.value)}
              placeholder="john.smith@company.com"
            />
          </div>
        </div>

        {/* Property Section */}
        <div className="space-y-6">
          <h2 className="text-center">Property</h2>

          {/* Property */}
          <div className="space-y-2">
            <Label htmlFor="property">Property *</Label>
            <DemoSelect 
              name="property"
              value={formData.property} 
              onValueChange={(value) => handleChange('property', value)}
            >
              <SelectTrigger id="property">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rental">Rental</SelectItem>
                <SelectItem value="owner">Owner</SelectItem>
              </SelectContent>
            </DemoSelect>
          </div>

          {/* Conditional Property Contact fields - only show if rental */}
          {formData.property === 'rental' && (
            <>
              {/* Landlord first name */}
              <div className="space-y-2">
                <Label htmlFor="landlordFirstName">Landlord first name *</Label>
                <Input
                  id="landlordFirstName"
                  name="landlordFirstName"
                  value={formData.landlordFirstName}
                  onChange={(e) => handleChange('landlordFirstName', e.target.value)}
                  placeholder="Jane"
                />
              </div>

              {/* Landlord last name */}
              <div className="space-y-2">
                <Label htmlFor="landlordLastName">Landlord last name *</Label>
                <Input
                  id="landlordLastName"
                  name="landlordLastName"
                  value={formData.landlordLastName}
                  onChange={(e) => handleChange('landlordLastName', e.target.value)}
                  placeholder="Doe"
                />
              </div>

              {/* Landlord company phone */}
              <div className="space-y-2">
                <Label htmlFor="landlordCompanyPhone">Landlord company phone *</Label>
                <Input
                  id="landlordCompanyPhone"
                  name="landlordCompanyPhone"
                  type="tel"
                  value={formData.landlordCompanyPhone}
                  onChange={(e) => handleChange('landlordCompanyPhone', e.target.value)}
                  placeholder="(555) 321-9876"
                />
              </div>
            </>
          )}
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