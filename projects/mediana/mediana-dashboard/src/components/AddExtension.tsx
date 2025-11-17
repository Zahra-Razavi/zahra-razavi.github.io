import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Phone, Users, Settings, Volume2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function AddExtension() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    extensionName: '',
    dialingNumber: '',
    assignedTo: '',
    department: '',
    voiceSetting: 'default',
    forwardTo: '',
    voicemailEnabled: true,
    greetingMessage: '',
    maxConcurrentCalls: '1',
    callRecording: false,
    busyMessage: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.extensionName.trim()) {
      toast.error('Please enter an extension name');
      return;
    }
    if (!formData.dialingNumber.trim()) {
      toast.error('Please enter a dialing number');
      return;
    }

    // Save extension logic would go here
    toast.success('Extension created successfully!');
    navigate('/lines');
  };

  const handleCancel = () => {
    navigate('/lines');
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleCancel}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1>Add Extension</h1>
            <p className="text-muted-foreground">
              Create a new phone extension for your organization
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Extension
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal" />
                <CardTitle>Basic Information</CardTitle>
              </div>
              <CardDescription>Set up the basic details of the extension</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="extensionName">Extension Name *</Label>
                  <Input
                    id="extensionName"
                    placeholder="e.g., Reception, Sales Team"
                    value={formData.extensionName}
                    onChange={(e) => handleInputChange('extensionName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialingNumber">Dialing Number *</Label>
                  <Input
                    id="dialingNumber"
                    placeholder="e.g., 101, 102"
                    value={formData.dialingNumber}
                    onChange={(e) => handleInputChange('dialingNumber', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="assignedTo">Assigned To</Label>
                  <Input
                    id="assignedTo"
                    placeholder="Employee name"
                    value={formData.assignedTo}
                    onChange={(e) => handleInputChange('assignedTo', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) => handleInputChange('department', value)}
                  >
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="reception">Reception</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Voice Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-teal" />
                <CardTitle>Voice Settings</CardTitle>
              </div>
              <CardDescription>Configure how calls are handled for this extension</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="voiceSetting">Call Handling</Label>
                <Select
                  value={formData.voiceSetting}
                  onValueChange={(value) => handleInputChange('voiceSetting', value)}
                >
                  <SelectTrigger id="voiceSetting">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Ring Extension</SelectItem>
                    <SelectItem value="voicemail">Direct to Voicemail</SelectItem>
                    <SelectItem value="forward">Forward to Number</SelectItem>
                    <SelectItem value="busy">Always Busy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.voiceSetting === 'forward' && (
                <div className="space-y-2">
                  <Label htmlFor="forwardTo">Forward To Number</Label>
                  <Input
                    id="forwardTo"
                    placeholder="+1-555-0123"
                    value={formData.forwardTo}
                    onChange={(e) => handleInputChange('forwardTo', e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="maxCalls">Max Concurrent Calls</Label>
                <Select
                  value={formData.maxConcurrentCalls}
                  onValueChange={(value) => handleInputChange('maxConcurrentCalls', value)}
                >
                  <SelectTrigger id="maxCalls">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Call</SelectItem>
                    <SelectItem value="2">2 Calls</SelectItem>
                    <SelectItem value="3">3 Calls</SelectItem>
                    <SelectItem value="5">5 Calls</SelectItem>
                    <SelectItem value="unlimited">Unlimited</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="voicemail">Voicemail</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable voicemail for this extension
                  </p>
                </div>
                <Switch
                  id="voicemail"
                  checked={formData.voicemailEnabled}
                  onCheckedChange={(checked) => handleInputChange('voicemailEnabled', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="recording">Call Recording</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically record calls on this extension
                  </p>
                </div>
                <Switch
                  id="recording"
                  checked={formData.callRecording}
                  onCheckedChange={(checked) => handleInputChange('callRecording', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Messages */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-teal" />
                <CardTitle>Custom Messages</CardTitle>
              </div>
              <CardDescription>Set custom greetings and messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.voicemailEnabled && (
                <div className="space-y-2">
                  <Label htmlFor="greeting">Greeting Message</Label>
                  <Textarea
                    id="greeting"
                    placeholder="Enter a custom greeting message..."
                    rows={3}
                    value={formData.greetingMessage}
                    onChange={(e) => handleInputChange('greetingMessage', e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    This message will play when someone reaches this extension's voicemail
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="busyMessage">Busy Message</Label>
                <Textarea
                  id="busyMessage"
                  placeholder="Enter a message to play when the line is busy..."
                  rows={2}
                  value={formData.busyMessage}
                  onChange={(e) => handleInputChange('busyMessage', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Setup */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Setup</CardTitle>
              <CardDescription>Common extension configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    voiceSetting: 'default',
                    voicemailEnabled: true,
                    callRecording: false
                  }));
                  toast.success('Applied standard extension settings');
                }}
              >
                <Users className="h-4 w-4 mr-2" />
                Standard Extension
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    voiceSetting: 'voicemail',
                    voicemailEnabled: true,
                    callRecording: false
                  }));
                  toast.success('Applied voicemail-only settings');
                }}
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Voicemail Only
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    voiceSetting: 'default',
                    voicemailEnabled: true,
                    callRecording: true,
                    maxConcurrentCalls: 'unlimited'
                  }));
                  toast.success('Applied call center settings');
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Center Agent
              </Button>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                • Choose a memorable dialing number for easy recall
              </p>
              <p>
                • Enable voicemail to never miss important calls
              </p>
              <p>
                • Use call forwarding for remote workers
              </p>
              <p>
                • Record calls for quality assurance and training
              </p>
            </CardContent>
          </Card>

          {/* Extension Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span>{formData.extensionName || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Number:</span>
                <span>{formData.dialingNumber || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Assigned To:</span>
                <span>{formData.assignedTo || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Department:</span>
                <span className="capitalize">{formData.department || '—'}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
