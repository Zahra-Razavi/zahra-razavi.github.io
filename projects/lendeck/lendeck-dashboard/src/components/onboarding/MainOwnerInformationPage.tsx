import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { DemoSelect } from '../ui/demo-select';
import { Checkbox } from '../ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface FormData {
  firstName: string;
  lastName: string;
  ownership: string;
  ssn: string;
  driversLicense: string;
  dateOfBirth: string;
  email: string;
  homePhone: string;
  mobilePhone: string;
  homeAddress: string;
  city: string;
  state: string;
  zip: string;
  additionalOwner: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  ownership: '',
  ssn: '',
  driversLicense: '',
  dateOfBirth: '',
  email: '',
  homePhone: '',
  mobilePhone: '',
  homeAddress: '',
  city: '',
  state: '',
  zip: '',
  additionalOwner: false,
};

export function MainOwnerInformationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    navigate('/onboarding/step-4');
  };

  const handleBack = () => {
    navigate('/onboarding/step-2');
  };

  return (
    <OnboardingLayout currentStep={3} totalSteps={5} title="Main Owner Information">
      <div className="space-y-8">
        {/* Main Owner Information Section */}
        <h2 className="text-center">Main Owner Information</h2>

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

        {/* Ownership % */}
        <div className="space-y-2">
          <Label htmlFor="ownershipPercent">Ownership % *</Label>
          <div className="relative">
            <Input
              id="ownershipPercent"
              name="ownershipPercent"
              type="text"
              value={formData.ownership}
              onChange={(e) => handleChange('ownership', e.target.value)}
              className="pr-10"
              placeholder="51"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
          </div>
        </div>

        {/* SSN */}
        <div className="space-y-2">
          <Label htmlFor="ssn">SSN</Label>
          <Input
            id="ssn"
            name="ssn"
            type="text"
            value={formData.ssn}
            onChange={(e) => handleChange('ssn', e.target.value)}
            placeholder="123-45-6789"
          />
        </div>

        {/* Driver's license */}
        <div className="space-y-2">
          <Label htmlFor="driversLicense">Driver's license</Label>
          <Input
            id="driversLicense"
            name="driversLicense"
            value={formData.driversLicense}
            onChange={(e) => handleChange('driversLicense', e.target.value)}
            placeholder="D1234567"
          />
        </div>

        {/* Date of birth */}
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            placeholder="01/01/2000"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john.smith@email.com"
          />
        </div>

        {/* Home phone */}
        <div className="space-y-2">
          <Label htmlFor="homePhone">Home phone</Label>
          <Input
            id="homePhone"
            name="homePhone"
            type="tel"
            value={formData.homePhone}
            onChange={(e) => handleChange('homePhone', e.target.value)}
            placeholder="(555) 234-5678"
          />
        </div>

        {/* Mobile phone */}
        <div className="space-y-2">
          <Label htmlFor="mobilePhone">Mobile phone</Label>
          <Input
            id="mobilePhone"
            name="mobilePhone"
            type="tel"
            value={formData.mobilePhone}
            onChange={(e) => handleChange('mobilePhone', e.target.value)}
            placeholder="(555) 876-5432"
          />
        </div>

        {/* Home Address */}
        <div className="space-y-2">
          <Label htmlFor="homeAddress">Home Address</Label>
          <Input
            id="homeAddress"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={(e) => handleChange('homeAddress', e.target.value)}
            placeholder="123 Main Street, Apt 4B"
          />
        </div>

        {/* City, State, Zip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder="New York"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <DemoSelect 
              name="state"
              value={formData.state} 
              onValueChange={(value) => handleChange('state', value)}
            >
              <SelectTrigger id="state">
                <SelectValue placeholder="-" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="AL">AL</SelectItem>
                <SelectItem value="AK">AK</SelectItem>
                <SelectItem value="AZ">AZ</SelectItem>
                <SelectItem value="AR">AR</SelectItem>
                <SelectItem value="CA">CA</SelectItem>
                <SelectItem value="CO">CO</SelectItem>
                <SelectItem value="CT">CT</SelectItem>
                <SelectItem value="DE">DE</SelectItem>
                <SelectItem value="DC">DC</SelectItem>
                <SelectItem value="FL">FL</SelectItem>
                <SelectItem value="GA">GA</SelectItem>
                <SelectItem value="HI">HI</SelectItem>
                <SelectItem value="ID">ID</SelectItem>
                <SelectItem value="IL">IL</SelectItem>
                <SelectItem value="IN">IN</SelectItem>
                <SelectItem value="IA">IA</SelectItem>
                <SelectItem value="KS">KS</SelectItem>
                <SelectItem value="KY">KY</SelectItem>
                <SelectItem value="LA">LA</SelectItem>
                <SelectItem value="ME">ME</SelectItem>
                <SelectItem value="MD">MD</SelectItem>
                <SelectItem value="MA">MA</SelectItem>
                <SelectItem value="MI">MI</SelectItem>
                <SelectItem value="MN">MN</SelectItem>
                <SelectItem value="MS">MS</SelectItem>
                <SelectItem value="MO">MO</SelectItem>
                <SelectItem value="MT">MT</SelectItem>
                <SelectItem value="NE">NE</SelectItem>
                <SelectItem value="NV">NV</SelectItem>
                <SelectItem value="NH">NH</SelectItem>
                <SelectItem value="NJ">NJ</SelectItem>
                <SelectItem value="NM">NM</SelectItem>
                <SelectItem value="NY">NY</SelectItem>
                <SelectItem value="NC">NC</SelectItem>
                <SelectItem value="ND">ND</SelectItem>
                <SelectItem value="OH">OH</SelectItem>
                <SelectItem value="OK">OK</SelectItem>
                <SelectItem value="OR">OR</SelectItem>
                <SelectItem value="PA">PA</SelectItem>
                <SelectItem value="RI">RI</SelectItem>
                <SelectItem value="SC">SC</SelectItem>
                <SelectItem value="SD">SD</SelectItem>
                <SelectItem value="TN">TN</SelectItem>
                <SelectItem value="TX">TX</SelectItem>
                <SelectItem value="UT">UT</SelectItem>
                <SelectItem value="VT">VT</SelectItem>
                <SelectItem value="VA">VA</SelectItem>
                <SelectItem value="WA">WA</SelectItem>
                <SelectItem value="WV">WV</SelectItem>
                <SelectItem value="WI">WI</SelectItem>
                <SelectItem value="WY">WY</SelectItem>
              </SelectContent>
            </DemoSelect>
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip">Zip</Label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={(e) => handleChange('zip', e.target.value)}
              placeholder="10001"
            />
          </div>
        </div>

        {/* Additional owner checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="additionalOwner"
            checked={formData.additionalOwner}
            onCheckedChange={(checked) => handleChange('additionalOwner', checked as boolean)}
          />
          <label
            htmlFor="additionalOwner"
            className="cursor-pointer select-none"
          >
            Additional owner
          </label>
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