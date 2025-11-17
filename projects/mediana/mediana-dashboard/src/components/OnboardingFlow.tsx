import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { User, Building2, Hash, Mic, CheckCircle } from 'lucide-react';
import { MedianaLogo } from './MedianaLogo';
import { demoPersonalInfo, demoBusinessInfo } from '../utils/demo-mode';
import { UserFlowDiagram } from './UserFlowDiagram';

interface OnboardingFlowProps {
  onComplete: (data: any) => void;
  initialData: any;
}

export function OnboardingFlow({ onComplete, initialData }: OnboardingFlowProps) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: initialData?.personalInfo || {
      firstName: '',
      lastName: '',
      mobile: '',
      idNumber: '',
      birthday: '',
      city: '',
      address: '',
      phoneNumber: ''
    },
    businessInfo: initialData?.businessInfo || {
      companyName: '',
      registrationId: '',
      city: '',
      address: '',
      companyPhone: ''
    },
    linesSetup: initialData?.linesSetup || {
      extensions: [
        { id: 1, name: '', dialingNumber: '', voiceSetting: 'default' }
      ]
    },
    ivrVoices: initialData?.ivrVoices || {
      files: []
    }
  });

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section as keyof typeof prev], ...data }
    }));
  };

  // Demo mode handlers
  const handleDemoFillPersonal = (field: keyof typeof demoPersonalInfo) => {
    const demoValue = demoPersonalInfo[field];
    if (field === 'firstName') {
      updateFormData('personalInfo', { firstName: demoValue });
    } else if (field === 'lastName') {
      updateFormData('personalInfo', { lastName: demoValue });
    } else if (field === 'phone') {
      updateFormData('personalInfo', { mobile: demoValue });
    } else if (field === 'email') {
      updateFormData('personalInfo', { email: demoValue });
    } else if (field === 'idNumber') {
      updateFormData('personalInfo', { idNumber: demoValue });
    }
  };

  const handleDemoFillBusiness = (field: keyof typeof demoBusinessInfo) => {
    const demoValue = demoBusinessInfo[field];
    if (field === 'companyName') {
      updateFormData('businessInfo', { companyName: demoValue });
    } else if (field === 'taxId') {
      updateFormData('businessInfo', { registrationId: demoValue });
    } else if (field === 'city') {
      updateFormData('businessInfo', { city: demoValue });
    } else if (field === 'address') {
      updateFormData('businessInfo', { address: demoValue });
    } else if (field === 'companyPhone') {
      updateFormData('businessInfo', { companyPhone: demoValue });
    }
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        const { firstName, lastName, mobile, idNumber } = formData.personalInfo;
        return firstName && lastName && mobile && idNumber;
      case 2:
        const { companyName, registrationId } = formData.businessInfo;
        return companyName && registrationId;
      case 3:
        return formData.linesSetup?.extensions?.some(ext => ext.name && ext.dialingNumber) || false;
      case 4:
        return true; // Optional step
      case 5:
        return true; // Review step
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep === 0 || validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    if (currentStep === 0) {
      // On welcome step, go back to signup page and clear auth
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      navigate('/login');
    } else {
      setCurrentStep(prev => Math.max(prev - 1, 0));
    }
  };

  const handleSubmit = () => {
    onComplete(formData);
    navigate('/dashboard');
  };

  const addExtension = () => {
    const newExtension = {
      id: Date.now(),
      name: '',
      dialingNumber: '',
      voiceSetting: 'default'
    };
    const currentExtensions = formData.linesSetup?.extensions || [];
    updateFormData('linesSetup', {
      extensions: [...currentExtensions, newExtension]
    });
  };

  const updateExtension = (id: number, field: string, value: string) => {
    const currentExtensions = formData.linesSetup?.extensions || [];
    const updatedExtensions = currentExtensions.map(ext =>
      ext.id === id ? { ...ext, [field]: value } : ext
    );
    updateFormData('linesSetup', { extensions: updatedExtensions });
  };

  const removeExtension = (id: number) => {
    const currentExtensions = formData.linesSetup?.extensions || [];
    const updatedExtensions = currentExtensions.filter(ext => ext.id !== id);
    updateFormData('linesSetup', { extensions: updatedExtensions });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Card className="w-full max-w-5xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Welcome to Mediana VoIP!</CardTitle>
              <CardDescription className="text-base mt-2">
                Let's get you set up in just a few simple steps. Here's what we'll do together:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <UserFlowDiagram />
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-teal-subtle rounded-lg">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2">Your Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell us about yourself and your business
                  </p>
                </div>
                
                <div className="text-center p-6 bg-teal-subtle rounded-lg">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hash className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2">Configure Lines</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up your phone numbers and extensions
                  </p>
                </div>
                
                <div className="text-center p-6 bg-teal-subtle rounded-lg">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2">Customize IVR</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalize your call routing system
                  </p>
                </div>
              </div>

              <div className="bg-teal-light/20 border border-teal-light rounded-lg p-6 mt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-2">
                      <strong>Estimated time:</strong> 5-10 minutes
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Don't worry, you can always come back and modify these settings later in your dashboard.
                      Click on any field to auto-fill with demo data for testing!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 1:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <CardTitle>Personal Information</CardTitle>
              </div>
              <CardDescription>
                Please provide your personal details to get started with Mediana VoIP.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.personalInfo.firstName}
                    onChange={(e) => updateFormData('personalInfo', { firstName: e.target.value })}
                    onClick={() => handleDemoFillPersonal('firstName')}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.personalInfo.lastName}
                    onChange={(e) => updateFormData('personalInfo', { lastName: e.target.value })}
                    onClick={() => handleDemoFillPersonal('lastName')}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    value={formData.personalInfo.mobile}
                    onChange={(e) => updateFormData('personalInfo', { mobile: e.target.value })}
                    onClick={() => handleDemoFillPersonal('phone')}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="idNumber">ID Number *</Label>
                  <Input
                    id="idNumber"
                    value={formData.personalInfo.idNumber}
                    onChange={(e) => updateFormData('personalInfo', { idNumber: e.target.value })}
                    onClick={() => handleDemoFillPersonal('idNumber')}
                    placeholder="Enter your ID number"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input
                    id="birthday"
                    type="date"
                    value={formData.personalInfo.birthday}
                    onChange={(e) => updateFormData('personalInfo', { birthday: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.personalInfo.city}
                    onChange={(e) => updateFormData('personalInfo', { city: e.target.value })}
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.personalInfo.address}
                  onChange={(e) => updateFormData('personalInfo', { address: e.target.value })}
                  placeholder="Enter your full address"
                />
              </div>
              
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={formData.personalInfo.phoneNumber}
                  onChange={(e) => updateFormData('personalInfo', { phoneNumber: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-primary" />
                <CardTitle>Business Information</CardTitle>
              </div>
              <CardDescription>
                Tell us about your business to set up your VoIP service properly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.businessInfo.companyName}
                  onChange={(e) => updateFormData('businessInfo', { companyName: e.target.value })}
                  onClick={() => handleDemoFillBusiness('companyName')}
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <Label htmlFor="registrationId">Business Registration ID *</Label>
                <Input
                  id="registrationId"
                  value={formData.businessInfo.registrationId}
                  onChange={(e) => updateFormData('businessInfo', { registrationId: e.target.value })}
                  onClick={() => handleDemoFillBusiness('taxId')}
                  placeholder="Enter your business registration ID"
                />
              </div>
              
              <div>
                <Label htmlFor="businessCity">City</Label>
                <Input
                  id="businessCity"
                  value={formData.businessInfo.city}
                  onChange={(e) => updateFormData('businessInfo', { city: e.target.value })}
                  onClick={() => handleDemoFillBusiness('city')}
                  placeholder="Enter your business city"
                />
              </div>
              
              <div>
                <Label htmlFor="businessAddress">Business Address</Label>
                <Textarea
                  id="businessAddress"
                  value={formData.businessInfo.address}
                  onChange={(e) => updateFormData('businessInfo', { address: e.target.value })}
                  onClick={() => handleDemoFillBusiness('address')}
                  placeholder="Enter your business address"
                />
              </div>
              
              <div>
                <Label htmlFor="companyPhone">Company Phone Number</Label>
                <Input
                  id="companyPhone"
                  value={formData.businessInfo.companyPhone}
                  onChange={(e) => updateFormData('businessInfo', { companyPhone: e.target.value })}
                  onClick={() => handleDemoFillBusiness('companyPhone')}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        const extensions = formData.linesSetup?.extensions || [];
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Hash className="h-5 w-5 text-primary" />
                <CardTitle>Lines Setup</CardTitle>
              </div>
              <CardDescription>
                Configure your extension numbers and voice settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {extensions.map((extension, index) => (
                <div key={extension.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h4>Extension {index + 1}</h4>
                    {extensions.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeExtension(extension.id)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Extension Name</Label>
                      <Input
                        value={extension.name}
                        onChange={(e) => updateExtension(extension.id, 'name', e.target.value)}
                        onClick={() => {
                          if (!extension.name) {
                            const sampleNames = ['Reception', 'Sales', 'Support', 'Management', 'Marketing'];
                            updateExtension(extension.id, 'name', sampleNames[index % sampleNames.length]);
                          }
                        }}
                        placeholder="e.g., Reception, Sales"
                      />
                    </div>
                    <div>
                      <Label>Dialing Number</Label>
                      <Input
                        value={extension.dialingNumber}
                        onChange={(e) => updateExtension(extension.id, 'dialingNumber', e.target.value)}
                        onClick={() => {
                          if (!extension.dialingNumber) {
                            const sampleNumber = (101 + index).toString();
                            updateExtension(extension.id, 'dialingNumber', sampleNumber);
                          }
                        }}
                        placeholder="e.g., 101, 102"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Voice Setting</Label>
                    <select
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      value={extension.voiceSetting}
                      onChange={(e) => updateExtension(extension.id, 'voiceSetting', e.target.value)}
                    >
                      <option value="default">Default</option>
                      <option value="voicemail">Voicemail</option>
                      <option value="forward">Forward</option>
                      <option value="busy">Busy Signal</option>
                    </select>
                  </div>
                </div>
              ))}
              
              <Button onClick={addExtension} variant="outline" className="w-full">
                Add Another Extension
              </Button>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Mic className="h-5 w-5 text-primary" />
                <CardTitle>IVR Voice Setup</CardTitle>
              </div>
              <CardDescription>
                Upload voice recordings for your Interactive Voice Response system (optional).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Mic className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3>Upload Voice Files</h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop your audio files here, or click to browse
                </p>
                <Button variant="outline">
                  Choose Files
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Supported formats: MP3, WAV, AAC (Max 10MB each)
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4>Voice Recording Tips:</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Speak clearly and at a moderate pace</li>
                  <li>• Record in a quiet environment</li>
                  <li>• Keep messages concise and professional</li>
                  <li>• Test recordings before uploading</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        const reviewExtensions = formData.linesSetup?.extensions || [];
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>Review Information</CardTitle>
              </div>
              <CardDescription>
                Please review your information before submitting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4>Personal Information</h4>
                <div className="text-sm text-muted-foreground mt-1">
                  <p>{formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
                  <p>{formData.personalInfo.mobile}</p>
                  <p>ID: {formData.personalInfo.idNumber}</p>
                </div>
              </div>
              
              <div>
                <h4>Business Information</h4>
                <div className="text-sm text-muted-foreground mt-1">
                  <p>{formData.businessInfo.companyName}</p>
                  <p>Registration ID: {formData.businessInfo.registrationId}</p>
                </div>
              </div>
              
              <div>
                <h4>Extensions Configured</h4>
                <div className="text-sm text-muted-foreground mt-1">
                  {reviewExtensions.map((ext, index) => (
                    <p key={ext.id}>
                      {ext.name || `Extension ${index + 1}`}: {ext.dialingNumber} ({ext.voiceSetting})
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  By submitting this information, you agree to Mediana VoIP's terms of service 
                  and privacy policy. Your VoIP service will be activated within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {currentStep === 0 ? (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MedianaLogo className="h-12" />
            </div>
          </div>
        ) : (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MedianaLogo className="h-12" />
            </div>
            <h1 className="mb-2">Welcome to Mediana VoIP</h1>
            <p className="text-muted-foreground">
              Let's get your VoIP service set up in just a few steps
            </p>
          </div>
        )}

        {currentStep > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Step {currentStep} of 5</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / 5) * 100)}%</span>
            </div>
            <Progress value={(currentStep / 5) * 100} className="w-full" />
          </div>
        )}

        <div className="flex justify-center mb-8">
          {renderStep()}
        </div>

        <div className="flex justify-between max-w-2xl mx-auto">
          <Button
            variant="outline"
            onClick={prevStep}
          >
            {currentStep === 0 ? 'Back to Login' : 'Previous'}
          </Button>
          
          {currentStep < 5 ? (
            <Button
              onClick={nextStep}
              disabled={currentStep > 0 && !validateStep(currentStep)}
            >
              {currentStep === 0 ? 'Get Started' : 'Next'}
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>

        {(currentStep === 1 || currentStep === 2) && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            * This step is required to continue
          </p>
        )}
      </div>
    </div>
  );
}