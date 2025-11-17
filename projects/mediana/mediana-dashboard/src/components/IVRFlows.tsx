import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Plus, Play, Edit, Trash2, Phone, GitBranch, Mic, ArrowRight, Settings } from 'lucide-react';

export interface IVRFlowsRef {
  openCreateDialog: () => void;
}

export function IVRFlowsHeaderActions({ onCreateClick }: { onCreateClick: () => void }) {
  return (
    <Button onClick={onCreateClick}>
      <Plus className="h-4 w-4 mr-2" />
      Create Flow
    </Button>
  );
}

interface IVRNode {
  id: string;
  type: 'greeting' | 'menu' | 'transfer' | 'voicemail' | 'hangup';
  title: string;
  message: string;
  options?: { key: string; label: string; target: string }[];
  transferTo?: string;
  position: { x: number; y: number };
}

interface IVRFlow {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'draft' | 'inactive';
  nodes: IVRNode[];
  lastModified: string;
}

const initialFlows: IVRFlow[] = [
  {
    id: 1,
    name: 'Main Reception Flow',
    description: 'Primary customer service flow for incoming calls',
    status: 'active',
    lastModified: '2025-01-15 14:30:00',
    nodes: [
      {
        id: 'start',
        type: 'greeting',
        title: 'Welcome Message',
        message: 'Thank you for calling Mediana. Your call is important to us.',
        position: { x: 100, y: 100 }
      },
      {
        id: 'main-menu',
        type: 'menu',
        title: 'Main Menu',
        message: 'Press 1 for Sales, 2 for Support, 3 for Billing, or 0 for operator.',
        options: [
          { key: '1', label: 'Sales', target: 'sales-transfer' },
          { key: '2', label: 'Support', target: 'support-transfer' },
          { key: '3', label: 'Billing', target: 'billing-transfer' },
          { key: '0', label: 'Operator', target: 'operator-transfer' }
        ],
        position: { x: 100, y: 250 }
      },
      {
        id: 'sales-transfer',
        type: 'transfer',
        title: 'Transfer to Sales',
        message: 'Connecting you to our sales team.',
        transferTo: '102',
        position: { x: 50, y: 400 }
      },
      {
        id: 'support-transfer',
        type: 'transfer',
        title: 'Transfer to Support',
        message: 'Connecting you to technical support.',
        transferTo: '103',
        position: { x: 150, y: 400 }
      }
    ]
  },
  {
    id: 2,
    name: 'After Hours Flow',
    description: 'Automated flow for calls outside business hours',
    status: 'active',
    lastModified: '2025-01-14 09:15:00',
    nodes: [
      {
        id: 'after-hours-greeting',
        type: 'greeting',
        title: 'After Hours Message',
        message: 'Thank you for calling. Our office hours are Monday to Friday, 9 AM to 6 PM.',
        position: { x: 100, y: 100 }
      },
      {
        id: 'after-hours-menu',
        type: 'menu',
        title: 'After Hours Options',
        message: 'Press 1 to leave a voicemail, 2 for emergency support, or hang up.',
        options: [
          { key: '1', label: 'Voicemail', target: 'voicemail' },
          { key: '2', label: 'Emergency', target: 'emergency-transfer' }
        ],
        position: { x: 100, y: 250 }
      }
    ]
  },
  {
    id: 3,
    name: 'Sales Qualification Flow',
    description: 'Pre-qualifies sales leads before transfer',
    status: 'draft',
    lastModified: '2025-01-13 16:45:00',
    nodes: [
      {
        id: 'sales-greeting',
        type: 'greeting',
        title: 'Sales Welcome',
        message: 'Welcome to our sales department.',
        position: { x: 100, y: 100 }
      }
    ]
  }
];

export function IVRFlows() {
  const [flows, setFlows] = useState<IVRFlow[]>(initialFlows);
  const [selectedFlow, setSelectedFlow] = useState<IVRFlow | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newFlowName, setNewFlowName] = useState('');
  const [newFlowDescription, setNewFlowDescription] = useState('');

  const handleCreateFlow = () => {
    const newFlow: IVRFlow = {
      id: flows.length + 1,
      name: newFlowName,
      description: newFlowDescription,
      status: 'draft',
      nodes: [],
      lastModified: new Date().toISOString()
    };
    setFlows([...flows, newFlow]);
    setIsCreateDialogOpen(false);
    setNewFlowName('');
    setNewFlowDescription('');
    setSelectedFlow(newFlow);
  };

  const toggleFlowStatus = (id: number) => {
    setFlows(flows.map(flow =>
      flow.id === id
        ? { ...flow, status: flow.status === 'active' ? 'draft' : 'active' }
        : flow
    ));
  };

  const handleDeleteFlow = (id: number) => {
    if (confirm('Are you sure you want to delete this flow?')) {
      setFlows(flows.filter(flow => flow.id !== id));
      if (selectedFlow?.id === id) {
        setSelectedFlow(null);
      }
    }
  };

  const handleTestCall = (id: number) => {
    alert(`Testing IVR flow #${id}. In a real application, this would initiate a test call.`);
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-success text-white">Active</Badge>
      : <Badge variant="secondary">Draft</Badge>;
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'greeting':
        return <Phone className="h-4 w-4" />;
      case 'menu':
        return <GitBranch className="h-4 w-4" />;
      case 'transfer':
        return <Phone className="h-4 w-4" />;
      default:
        return <Mic className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Create Flow Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New IVR Flow</DialogTitle>
            <DialogDescription>
              Set up a new Interactive Voice Response flow for your phone system.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="flowName">Flow Name</Label>
              <Input
                id="flowName"
                value={newFlowName}
                onChange={(e) => setNewFlowName(e.target.value)}
                placeholder="e.g., Main Reception Flow"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="flowDescription">Description</Label>
              <Textarea
                id="flowDescription"
                value={newFlowDescription}
                onChange={(e) => setNewFlowDescription(e.target.value)}
                placeholder="Describe the purpose of this IVR flow"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateFlow}>
              Create Flow
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flow List */}
        <div className="lg:col-span-1 h-full">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>IVR Flows</CardTitle>
              <CardDescription>
                Manage your voice response flows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 overflow-auto">
              {flows.map((flow) => (
                <div
                  key={flow.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedFlow?.id === flow.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedFlow(flow)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4>{flow.name}</h4>
                    {getStatusBadge(flow.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {flow.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {flow.nodes.length} nodes
                    </span>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTestCall(flow.id);
                        }}
                      >
                        <Play className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlowStatus(flow.id);
                        }}
                      >
                        <Settings className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteFlow(flow.id);
                        }}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {flows.length === 0 && (
                <div className="text-center py-8">
                  <GitBranch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">
                    No IVR flows created yet
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Flow Designer */}
        <div className="lg:col-span-2 h-full">
          {selectedFlow ? (
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>{selectedFlow.name}</span>
                      {getStatusBadge(selectedFlow.status)}
                    </CardTitle>
                    <CardDescription>{selectedFlow.description}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleTestCall(selectedFlow.id)}>
                      <Play className="h-4 w-4 mr-2" />
                      Test Call
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Node
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="bg-muted/30 rounded-lg p-6 min-h-[400px] relative">
                  {/* Flow Visualization */}
                  <div className="space-y-6">
                    {selectedFlow.nodes.map((node, index) => (
                      <div key={node.id} className="flex items-center space-x-4">
                        <div className="bg-card border rounded-lg p-4 min-w-[200px]">
                          <div className="flex items-center space-x-2 mb-2">
                            {getNodeIcon(node.type)}
                            <span className="text-sm font-medium">{node.title}</span>
                            <Badge variant="outline" className="text-xs">
                              {node.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            {node.message}
                          </p>
                          
                          {node.options && (
                            <div className="space-y-1">
                              {node.options.map((option, optIndex) => (
                                <div key={optIndex} className="flex items-center text-xs">
                                  <span className="bg-primary text-primary-foreground px-1 rounded mr-2">
                                    {option.key}
                                  </span>
                                  <span>{option.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {node.transferTo && (
                            <div className="text-xs text-teal">
                              → Transfer to ext. {node.transferTo}
                            </div>
                          )}
                          
                          <div className="flex space-x-1 mt-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        {index < selectedFlow.nodes.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                    
                    {selectedFlow.nodes.length === 0 && (
                      <div className="text-center py-12">
                        <GitBranch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3>No Nodes Added</h3>
                        <p className="text-muted-foreground mb-4">
                          Start building your IVR flow by adding nodes
                        </p>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add First Node
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex flex-col">
              <CardContent className="flex items-center justify-center flex-1">
                <div className="text-center">
                  <GitBranch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3>Select an IVR Flow</h3>
                  <p className="text-muted-foreground">
                    Choose a flow from the left panel to view and edit
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Flow Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {flows.filter(flow => flow.status === 'active').length}
                </p>
                <p className="text-sm text-muted-foreground">Active Flows</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Settings className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {flows.reduce((sum, flow) => sum + flow.nodes.length, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Nodes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Edit className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {flows.filter(flow => flow.status === 'draft').length}
                </p>
                <p className="text-sm text-muted-foreground">Draft Flows</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Guide */}
      <Card>
        <CardHeader>
          <CardTitle>IVR Flow Builder Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4>Node Types:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li><strong>Greeting:</strong> Welcome message or announcements</li>
                <li><strong>Menu:</strong> Interactive options for callers</li>
                <li><strong>Transfer:</strong> Route calls to specific extensions</li>
                <li><strong>Voicemail:</strong> Collect caller messages</li>
                <li><strong>Hangup:</strong> End the call</li>
              </ul>
            </div>
            <div>
              <h4>Best Practices:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Keep menu options to 4 or fewer choices</li>
                <li>• Use clear, concise language in messages</li>
                <li>• Always provide an option to reach a human</li>
                <li>• Test your flows regularly with actual calls</li>
                <li>• Consider after-hours and busy scenarios</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}