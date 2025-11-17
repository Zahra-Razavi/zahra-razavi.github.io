import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Switch } from './ui/switch';
import { Plus, Edit, Trash2, Phone, Settings, Volume2 } from 'lucide-react';

export function LinesHeaderActions({ onAddClick }: { onAddClick: () => void }) {
  return (
    <Button onClick={onAddClick}>
      <Plus className="h-4 w-4 mr-2" />
      Add Extension
    </Button>
  );
}

interface Extension {
  id: number;
  name: string;
  dialingNumber: string;
  voiceSetting: string;
  status: 'active' | 'inactive' | 'busy';
  forwardTo?: string;
  voicemailEnabled: boolean;
  currentCalls: number;
}

const initialExtensions: Extension[] = [
  {
    id: 1,
    name: 'Reception',
    dialingNumber: '101',
    voiceSetting: 'voicemail',
    status: 'active',
    voicemailEnabled: true,
    currentCalls: 0
  },
  {
    id: 2,
    name: 'Sales Team',
    dialingNumber: '102',
    voiceSetting: 'forward',
    status: 'active',
    forwardTo: '+1-555-0123',
    voicemailEnabled: true,
    currentCalls: 2
  },
  {
    id: 3,
    name: 'Technical Support',
    dialingNumber: '103',
    voiceSetting: 'default',
    status: 'busy',
    voicemailEnabled: true,
    currentCalls: 1
  },
  {
    id: 4,
    name: 'Manager Office',
    dialingNumber: '104',
    voiceSetting: 'busy',
    status: 'inactive',
    voicemailEnabled: false,
    currentCalls: 0
  },
  {
    id: 5,
    name: 'HR Department',
    dialingNumber: '105',
    voiceSetting: 'voicemail',
    status: 'active',
    voicemailEnabled: true,
    currentCalls: 0
  }
];

export function Lines() {
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions);
  const [selectedExtension, setSelectedExtension] = useState<Extension | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    number: '',
    assignedTo: '',
    ringTime: '',
    voicemail: false
  });

  const handleEditClick = (extension: Extension) => {
    setSelectedExtension(extension);
    setEditForm({
      number: extension.dialingNumber,
      assignedTo: extension.name,
      ringTime: extension.voiceSetting,
      voicemail: extension.voicemailEnabled
    });
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (selectedExtension) {
      setExtensions(extensions.map(ext =>
        ext.id === selectedExtension.id
          ? { ...ext, ...editForm }
          : ext
      ));
      setIsEditDialogOpen(false);
      setSelectedExtension(null);
    }
  };

  const handleDelete = (id: number) => {
    setExtensions(prev => prev.filter(ext => ext.id !== id));
  };

  const toggleStatus = (id: number) => {
    setExtensions(prev => prev.map(ext => 
      ext.id === id 
        ? { ...ext, status: ext.status === 'active' ? 'inactive' : 'active' }
        : ext
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default" className="bg-success text-white">Active</Badge>;
      case 'inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      case 'busy':
        return <Badge variant="destructive">Busy</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getVoiceSettingDisplay = (setting: string, forwardTo?: string) => {
    switch (setting) {
      case 'voicemail':
        return 'Voicemail';
      case 'forward':
        return `Forward to ${forwardTo || 'N/A'}`;
      case 'busy':
        return 'Busy Signal';
      default:
        return 'Default Ring';
    }
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Edit Extension Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Edit Extension
            </DialogTitle>
            <DialogDescription>
              Configure the extension settings and voice options.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Extension Name</Label>
              <Input
                id="name"
                value={editForm.assignedTo}
                onChange={(e) => setEditForm(prev => ({ ...prev, assignedTo: e.target.value }))}
                placeholder="e.g., Reception, Sales"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="dialingNumber">Dialing Number</Label>
              <Input
                id="dialingNumber"
                value={editForm.number}
                onChange={(e) => setEditForm(prev => ({ ...prev, number: e.target.value }))}
                placeholder="e.g., 101, 102"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="voiceSetting">Voice Setting</Label>
              <Select
                value={editForm.ringTime}
                onValueChange={(value) => setEditForm(prev => ({ ...prev, ringTime: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select voice setting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default Ring</SelectItem>
                  <SelectItem value="voicemail">Voicemail</SelectItem>
                  <SelectItem value="forward">Forward Call</SelectItem>
                  <SelectItem value="busy">Busy Signal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {editForm.ringTime === 'forward' && (
              <div className="grid gap-2">
                <Label htmlFor="forwardTo">Forward To Number</Label>
                <Input
                  id="forwardTo"
                  value={selectedExtension?.forwardTo || ''}
                  onChange={(e) => setEditForm(prev => ({ ...prev, forwardTo: e.target.value }))}
                  placeholder="+1-555-0123"
                />
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Switch
                id="voicemail"
                checked={editForm.voicemail}
                onCheckedChange={(checked) => setEditForm(prev => ({ ...prev, voicemail: checked }))}
              />
              <Label htmlFor="voicemail">Enable Voicemail</Label>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>
              Update Extension
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Phone className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">{extensions.length}</p>
                <p className="text-sm text-muted-foreground">Total Extensions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Phone className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {extensions.filter(ext => ext.status === 'active').length}
                </p>
                <p className="text-sm text-muted-foreground">Active Lines</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Phone className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {extensions.reduce((sum, ext) => sum + ext.currentCalls, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Current Calls</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {extensions.filter(ext => ext.status === 'busy').length}
                </p>
                <p className="text-sm text-muted-foreground">Busy Lines</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Extensions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Extension Management</CardTitle>
          <CardDescription>
            Configure and manage your phone extensions and routing settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Extension Name</TableHead>
                  <TableHead>Dialing Number</TableHead>
                  <TableHead>Voice Setting</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Current Calls</TableHead>
                  <TableHead>Voicemail</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {extensions.map((extension) => (
                  <TableRow key={extension.id}>
                    <TableCell className="font-medium">{extension.name}</TableCell>
                    <TableCell className="font-mono">{extension.dialingNumber}</TableCell>
                    <TableCell>
                      {getVoiceSettingDisplay(extension.voiceSetting, extension.forwardTo)}
                    </TableCell>
                    <TableCell>{getStatusBadge(extension.status)}</TableCell>
                    <TableCell>
                      <span className={extension.currentCalls > 0 ? 'text-teal font-semibold' : ''}>
                        {extension.currentCalls}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Volume2 className={`h-4 w-4 ${extension.voicemailEnabled ? 'text-success' : 'text-gray-400'}`} />
                        <span>
                          {extension.voicemailEnabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleStatus(extension.id)}
                        >
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditClick(extension)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(extension.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {extensions.length === 0 && (
            <div className="text-center py-8">
              <Phone className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3>No Extensions Configured</h3>
              <p className="text-muted-foreground mb-4">
                Get started by adding your first extension
              </p>
              <Button onClick={() => handleOpenDialog()}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Extension
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Extension Setup Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4>Voice Settings Explained:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li><strong>Default Ring:</strong> Phone rings normally until answered or timeout</li>
                <li><strong>Voicemail:</strong> Calls go to voicemail after configured rings</li>
                <li><strong>Forward Call:</strong> Calls are forwarded to another number</li>
                <li><strong>Busy Signal:</strong> Callers hear a busy tone</li>
              </ul>
            </div>
            <div>
              <h4>Best Practices:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Use 3-digit numbers (101, 102, etc.) for easy dialing</li>
                <li>• Enable voicemail for important extensions</li>
                <li>• Set up call forwarding for remote workers</li>
                <li>• Keep extension names clear and descriptive</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}