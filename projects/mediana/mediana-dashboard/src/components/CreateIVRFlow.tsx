import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, Plus, Trash2, Phone, GitBranch, Mic, Settings } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface FlowNode {
  id: string;
  type: 'greeting' | 'menu' | 'transfer' | 'voicemail' | 'hangup';
  title: string;
  message: string;
  options?: { key: string; label: string; target: string }[];
  transferTo?: string;
}

export function CreateIVRFlow() {
  const navigate = useNavigate();
  const [flowName, setFlowName] = useState('');
  const [flowDescription, setFlowDescription] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const nodeIdCounter = React.useRef(1);
  const [nodes, setNodes] = useState<FlowNode[]>([
    {
      id: 'node-1',
      type: 'greeting',
      title: 'Welcome Greeting',
      message: 'Welcome to our service. Please listen to the following options.',
      options: []
    }
  ]);

  const handleAddNode = (type: FlowNode['type']) => {
    nodeIdCounter.current += 1;
    const newNode: FlowNode = {
      id: `node-${nodeIdCounter.current}`,
      type,
      title: type === 'greeting' ? 'New Greeting' :
             type === 'menu' ? 'New Menu' :
             type === 'transfer' ? 'Transfer Call' :
             type === 'voicemail' ? 'Voicemail' : 'Hangup',
      message: '',
      options: type === 'menu' ? [{ key: '1', label: 'Option 1', target: '' }] : []
    };
    setNodes([...nodes, newNode]);
  };

  const handleRemoveNode = (id: string) => {
    setNodes(nodes.filter(node => node.id !== id));
  };

  const handleSaveFlow = () => {
    if (!flowName.trim()) {
      toast.error('Please enter a flow name');
      return;
    }
    
    // Save flow logic would go here
    toast.success('IVR Flow created successfully!');
    navigate('/ivr-flows');
  };

  const handleCancel = () => {
    navigate('/ivr-flows');
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
            <h1>Create IVR Flow</h1>
            <p className="text-muted-foreground">
              Design your interactive voice response flow
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSaveFlow}>
            Save Flow
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Flow Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Set up the basic details of your IVR flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="flowName">Flow Name *</Label>
                <Input
                  id="flowName"
                  placeholder="e.g., Main Reception Flow"
                  value={flowName}
                  onChange={(e) => setFlowName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="flowDescription">Description</Label>
                <Textarea
                  id="flowDescription"
                  placeholder="Describe the purpose of this IVR flow"
                  rows={3}
                  value={flowDescription}
                  onChange={(e) => setFlowDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="template">Start from Template (Optional)</Label>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger id="template">
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blank">Blank Flow</SelectItem>
                    <SelectItem value="basic">Basic Reception</SelectItem>
                    <SelectItem value="support">Customer Support</SelectItem>
                    <SelectItem value="sales">Sales Department</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Flow Nodes */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Flow Nodes</CardTitle>
                  <CardDescription>Build your IVR flow by adding nodes</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleAddNode('menu')}>
                    <GitBranch className="h-4 w-4 mr-2" />
                    Menu
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleAddNode('transfer')}>
                    <Phone className="h-4 w-4 mr-2" />
                    Transfer
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {nodes.map((node, index) => (
                <Card key={node.id} className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {node.type === 'greeting' && <Mic className="h-4 w-4 text-teal" />}
                        {node.type === 'menu' && <GitBranch className="h-4 w-4 text-teal" />}
                        {node.type === 'transfer' && <Phone className="h-4 w-4 text-teal" />}
                        {node.type === 'voicemail' && <Settings className="h-4 w-4 text-teal" />}
                        <CardTitle className="text-sm">{node.title}</CardTitle>
                      </div>
                      {index > 0 && (
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleRemoveNode(node.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label>Message</Label>
                      <Textarea
                        placeholder="Enter the message to play..."
                        rows={2}
                        value={node.message}
                        onChange={(e) => {
                          const updatedNodes = [...nodes];
                          updatedNodes[index].message = e.target.value;
                          setNodes(updatedNodes);
                        }}
                      />
                    </div>

                    {node.type === 'menu' && node.options && (
                      <div className="space-y-2">
                        <Label>Menu Options</Label>
                        {node.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex gap-2">
                            <Input
                              className="w-16"
                              placeholder="Key"
                              value={option.key}
                              onChange={(e) => {
                                const updatedNodes = [...nodes];
                                updatedNodes[index].options![optionIndex].key = e.target.value;
                                setNodes(updatedNodes);
                              }}
                            />
                            <Input
                              className="flex-1"
                              placeholder="Option description"
                              value={option.label}
                              onChange={(e) => {
                                const updatedNodes = [...nodes];
                                updatedNodes[index].options![optionIndex].label = e.target.value;
                                setNodes(updatedNodes);
                              }}
                            />
                          </div>
                        ))}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            const updatedNodes = [...nodes];
                            updatedNodes[index].options!.push({
                              key: String(updatedNodes[index].options!.length + 1),
                              label: '',
                              target: ''
                            });
                            setNodes(updatedNodes);
                          }}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Option
                        </Button>
                      </div>
                    )}

                    {node.type === 'transfer' && (
                      <div className="space-y-2">
                        <Label>Transfer To</Label>
                        <Input
                          placeholder="Enter extension or phone number"
                          value={node.transferTo || ''}
                          onChange={(e) => {
                            const updatedNodes = [...nodes];
                            updatedNodes[index].transferTo = e.target.value;
                            setNodes(updatedNodes);
                          }}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Tips */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Add common flow elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => handleAddNode('greeting')}
              >
                <Mic className="h-4 w-4 mr-2" />
                Add Greeting
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => handleAddNode('menu')}
              >
                <GitBranch className="h-4 w-4 mr-2" />
                Add Menu
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => handleAddNode('transfer')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Add Transfer
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => handleAddNode('voicemail')}
              >
                <Settings className="h-4 w-4 mr-2" />
                Add Voicemail
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                • Start with a greeting to welcome callers
              </p>
              <p>
                • Use menus to give callers options
              </p>
              <p>
                • Keep messages clear and concise
              </p>
              <p>
                • Test your flow before activating
              </p>
              <p>
                • Always provide a way to reach a live person
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
