import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { DemoSelect, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/demo-select';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export function BusinessInformationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    merchantName: '',
    merchantDBA: '',
    federalTaxID: '',
    entityType: '',
    industry: '',
    businessRelatedTo: '',
    lineOfBusiness: '',
    businessStartDate: '',
    isHomeBased: '',
    stateOfIncorporation: '',
    hasBankruptcy: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Save to localStorage or context
    localStorage.setItem('onboarding_step1', JSON.stringify(formData));
    // Navigate to step 2 (you'll create this next)
    navigate('/onboarding/step-2');
  };

  const handleBack = () => {
    navigate('/broker/overview');
  };

  return (
    <OnboardingLayout currentStep={1} totalSteps={5} title="Business Information">
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Merchant name */}
          <div className="space-y-2">
            <Label htmlFor="merchantName">Merchant name *</Label>
            <Input
              id="merchantName"
              value={formData.merchantName}
              onChange={(e) => handleChange('merchantName', e.target.value)}
              placeholder="Enter merchant name"
            />
          </div>

          {/* Merchant DBA */}
          <div className="space-y-2">
            <Label htmlFor="merchantDBA">Merchant DBA *</Label>
            <Input
              id="merchantDBA"
              value={formData.merchantDBA}
              onChange={(e) => handleChange('merchantDBA', e.target.value)}
              placeholder="Enter DBA name"
            />
          </div>

          {/* Federal tax ID */}
          <div className="space-y-2">
            <Label htmlFor="federalTaxID">
              Federal tax ID *
            </Label>
            <Input
              id="federalTaxID"
              value={formData.federalTaxID}
              onChange={(e) => handleChange('federalTaxID', e.target.value)}
              placeholder="Enter tax ID"
              required
            />
          </div>

          {/* Entity type */}
          <div className="space-y-2">
            <Label htmlFor="entityType">Entity type *</Label>
            <DemoSelect 
              name="entityType"
              value={formData.entityType} 
              onValueChange={(value) => handleChange('entityType', value)}
            >
              <SelectTrigger id="entityType">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sole-proprietorship">Sole proprietorship</SelectItem>
                <SelectItem value="llc">Limited liability company</SelectItem>
                <SelectItem value="llp">Limited liability partnership</SelectItem>
                <SelectItem value="corporation">Corporation</SelectItem>
                <SelectItem value="limited-partnership">Limited partnership</SelectItem>
                <SelectItem value="general-partnership">General partnership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </DemoSelect>
          </div>

          {/* Industry (NAICS) */}
          <div className="space-y-2">
            <Label htmlFor="industry">Industry ( NAICS )</Label>
            <DemoSelect 
              name="industry"
              value={formData.industry} 
              onValueChange={(value) => handleChange('industry', value)}
            >
              <SelectTrigger id="industry">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="accommodation-food">Accommodation and Food Services Administrative and Support and Waste</SelectItem>
                <SelectItem value="agriculture">Management and Remediation Services Agriculture, Forestry, Fishing and Hunting</SelectItem>
                <SelectItem value="arts-entertainment">Arts, Entertainment, and Recreation</SelectItem>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="finance-insurance">Finance and Insurance</SelectItem>
                <SelectItem value="healthcare">Health Care and Social Assistance</SelectItem>
                <SelectItem value="information">Information</SelectItem>
                <SelectItem value="management">Management of Companies and Enterprises</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="mining">Mining, Quarrying, and Oil and Gas Extraction</SelectItem>
                <SelectItem value="nonprofits">Nonprofits</SelectItem>
                <SelectItem value="personal-services">Personal Services, Repair& Maintenance, and Non- Profits</SelectItem>
                <SelectItem value="professional">Professional, Scientific, and Technical Services</SelectItem>
                <SelectItem value="public-admin">Public Administration</SelectItem>
                <SelectItem value="real-estate">Real Estate and Rental and Leasing</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="transportation">Transportation and Warehousing</SelectItem>
                <SelectItem value="unknown">Unknown Industry</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="wholesale">Wholesale Trade</SelectItem>
              </SelectContent>
            </DemoSelect>
          </div>

          {/* Business related to */}
          <div className="space-y-2">
            <Label htmlFor="businessRelatedTo">Business related to</Label>
            <DemoSelect 
              name="businessRelatedTo"
              value={formData.businessRelatedTo} 
              onValueChange={(value) => handleChange('businessRelatedTo', value)}
            >
              <SelectTrigger id="businessRelatedTo">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="property-management">Property management</SelectItem>
                <SelectItem value="law-office">Law office</SelectItem>
                <SelectItem value="car-sales">Car sales</SelectItem>
                <SelectItem value="trucking">Trucking</SelectItem>
                <SelectItem value="real-estate">Real estate</SelectItem>
                <SelectItem value="cannabis">Cannabis</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="porn">Porn</SelectItem>
                <SelectItem value="nonprofit">Non- profit organizations</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="gas-stations">Gas stations</SelectItem>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectContent>
            </DemoSelect>
          </div>

          {/* Line of business */}
          <div className="space-y-2">
            <Label htmlFor="lineOfBusiness">Line of business *</Label>
            <Input
              id="lineOfBusiness"
              value={formData.lineOfBusiness}
              onChange={(e) => handleChange('lineOfBusiness', e.target.value)}
              placeholder="Enter line of business"
              required
            />
          </div>

          {/* Business start date */}
          <div className="space-y-2">
            <Label htmlFor="businessStartDate">Business start date</Label>
            <Input
              id="businessStartDate"
              type="date"
              value={formData.businessStartDate}
              onChange={(e) => handleChange('businessStartDate', e.target.value)}
            />
          </div>

          {/* Bankruptcy */}
          <div className="space-y-2">
            <Label htmlFor="bankruptcy">
              Any bankruptcy, judgements or tax liens *
            </Label>
            <DemoSelect 
              name="bankruptcy"
              value={formData.hasBankruptcy} 
              onValueChange={(value) => handleChange('hasBankruptcy', value)}
            >
              <SelectTrigger id="bankruptcy">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </DemoSelect>
          </div>
        </div>

        {/* Is home based */}
        <div className="space-y-3">
          <Label>Is home based *</Label>
          <RadioGroup
            name="isHomeBased"
            value={formData.isHomeBased}
            onValueChange={(value) => handleChange('isHomeBased', value)}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="home-yes" />
              <Label htmlFor="home-yes" className="font-normal cursor-pointer">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="home-no" />
              <Label htmlFor="home-no" className="font-normal cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* State of incorporation */}
        <div className="space-y-3">
          <Label htmlFor="stateOfIncorporation">State of incorporation *</Label>
          <DemoSelect 
            name="stateOfIncorporation"
            value={formData.stateOfIncorporation} 
            onValueChange={(value) => handleChange('stateOfIncorporation', value)}
          >
            <SelectTrigger id="stateOfIncorporation">
              <SelectValue placeholder="Please select" />
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
            type="submit"
            className="min-w-[150px] bg-[#4E0F60] hover:bg-[#3D0B4D]"
          >
            Next
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}