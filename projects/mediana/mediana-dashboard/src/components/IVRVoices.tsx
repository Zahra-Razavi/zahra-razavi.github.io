import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Upload, Play, Pause, Download, Trash2, Mic, Volume2, Clock, FileAudio, Info } from 'lucide-react';

export function IVRVoicesHeaderActions({ onUploadClick }: { onUploadClick: () => void }) {
  return (
    <Button onClick={onUploadClick}>
      <Upload className="h-4 w-4 mr-2" />
      Upload Voice File
    </Button>
  );
}

interface VoiceFile {
  id: number;
  name: string;
  description: string;
  filename: string;
  duration: string;
  size: number;
  format: string;
  uploadDate: string;
  usageCount: number;
  status: 'active' | 'inactive';
}

const initialVoiceFiles: VoiceFile[] = [
  {
    id: 1,
    name: 'Welcome Message',
    description: 'Main greeting for incoming calls',
    filename: 'welcome_greeting.mp3',
    duration: '00:12',
    size: 156,
    format: 'MP3',
    uploadDate: '2025-01-15',
    usageCount: 45,
    status: 'active'
  },
  {
    id: 2,
    name: 'Main Menu Options',
    description: 'Menu options for the main IVR flow',
    filename: 'main_menu.wav',
    duration: '00:18',
    size: 287,
    format: 'WAV',
    uploadDate: '2025-01-15',
    usageCount: 38,
    status: 'active'
  },
  {
    id: 3,
    name: 'Hold Music',
    description: 'Background music played while customers are on hold',
    filename: 'hold_music.mp3',
    duration: '02:45',
    size: 3200,
    format: 'MP3',
    uploadDate: '2025-01-14',
    usageCount: 156,
    status: 'active'
  },
  {
    id: 4,
    name: 'After Hours Message',
    description: 'Played when calling outside business hours',
    filename: 'after_hours.wav',
    duration: '00:20',
    size: 312,
    format: 'WAV',
    uploadDate: '2025-01-14',
    usageCount: 23,
    status: 'active'
  },
  {
    id: 5,
    name: 'Thank You Message',
    description: 'Closing message before call ends',
    filename: 'thank_you.mp3',
    duration: '00:08',
    size: 104,
    format: 'MP3',
    uploadDate: '2025-01-13',
    usageCount: 67,
    status: 'active'
  },
  {
    id: 6,
    name: 'Voicemail Instructions',
    description: 'Instructions for leaving voicemail',
    filename: 'voicemail_instructions.mp3',
    duration: '00:15',
    size: 198,
    format: 'MP3',
    uploadDate: '2025-01-13',
    usageCount: 29,
    status: 'inactive'
  }
];

export function IVRVoices() {
  const [voiceFiles, setVoiceFiles] = useState<VoiceFile[]>(initialVoiceFiles);
  const [selectedFile, setSelectedFile] = useState<VoiceFile | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [newFileData, setNewFileData] = useState<{
    name: string;
    description: string;
    filename: string;
    format: string;
    file: File | null;
  }>({
    name: '',
    description: '',
    filename: '',
    format: 'MP3',
    file: null
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const totalFiles = voiceFiles.length;
  const totalSize = voiceFiles.reduce((sum, file) => sum + file.size, 0);

  const handleFileDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this voice file?')) {
      setVoiceFiles(voiceFiles.filter(file => file.id !== id));
    }
  };

  const handleFileView = (file: VoiceFile) => {
    setSelectedFile(file);
    setIsDetailsDialogOpen(true);
  };

  const toggleFileStatus = (id: number) => {
    setVoiceFiles(voiceFiles.map(file =>
      file.id === id
        ? { ...file, status: file.status === 'active' ? 'inactive' : 'active' }
        : file
    ));
  };

  const handleUpload = () => {
    if (!newFileData.file || !newFileData.name) return;
    
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add the file after upload completes
          const newFile: VoiceFile = {
            id: voiceFiles.length + 1,
            name: newFileData.name,
            description: newFileData.description,
            filename: newFileData.file?.name || `${newFileData.name.toLowerCase().replace(/\s+/g, '_')}.${newFileData.format.toLowerCase()}`,
            duration: '00:00',
            size: Math.round((newFileData.file?.size || 0) / 1024),
            format: newFileData.format,
            uploadDate: new Date().toISOString().split('T')[0],
            usageCount: 0,
            status: 'active'
          };
          setVoiceFiles(prev => [...prev, newFile]);
          setIsUploadDialogOpen(false);
          setNewFileData({ name: '', description: '', filename: '', format: 'MP3', file: null });
          setUploadProgress(0);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handlePlayPause = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      // In a real app, this would play the audio file
      setTimeout(() => setPlayingId(null), 3000); // Auto-stop after 3 seconds
    }
  };

  const handleDownload = (filename: string) => {
    alert(`Downloading ${filename}. In a real app, this would download the file.`);
  };

  const handleDelete = (id: number) => {
    handleFileDelete(id);
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-success text-white">Active</Badge>
      : <Badge variant="secondary">Inactive</Badge>;
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Upload Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload New Voice File</DialogTitle>
            <DialogDescription>
              Add a new audio file to your IVR voice library.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="fileName">Voice File Name</Label>
              <Input
                id="fileName"
                value={newFileData.name}
                onChange={(e) => setNewFileData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Welcome Message"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="fileDescription">Description</Label>
              <Input
                id="fileDescription"
                value={newFileData.description}
                onChange={(e) => setNewFileData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of when this audio is used"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="fileUpload">Audio File</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <FileAudio className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your audio file here, or click to browse
                </p>
                <Input
                  id="fileUpload"
                  type="file"
                  accept=".mp3,.wav,.aac,.m4a"
                  onChange={(e) => setNewFileData(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                  className="w-auto"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Supported formats: MP3, WAV, AAC, M4A (Max 10MB)
                </p>
              </div>
              
              {newFileData.file && (
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Selected: {newFileData.file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Size: {Math.round(newFileData.file.size / 1024)} KB
                  </p>
                </div>
              )}
            </div>
            
            {uploadProgress > 0 && (
              <div className="grid gap-2">
                <Label>Upload Progress</Label>
                <Progress value={uploadProgress} />
                <p className="text-sm text-muted-foreground">{uploadProgress}% uploaded</p>
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleUpload}
              disabled={!newFileData.file || !newFileData.name || uploadProgress > 0}
            >
              Upload File
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>File Details</DialogTitle>
            <DialogDescription>
              Detailed information about {selectedFile?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedFile && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Filename</Label>
                  <p className="font-mono text-sm mt-1">{selectedFile.filename}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Format</Label>
                  <p className="mt-1">{selectedFile.format}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Duration</Label>
                  <p className="font-mono mt-1">{selectedFile.duration}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Size</Label>
                  <p className="mt-1">{Math.round(selectedFile.size / 1024)} KB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Upload Date</Label>
                  <p className="mt-1">{selectedFile.uploadDate}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Usage Count</Label>
                  <p className="mt-1">{selectedFile.usageCount}</p>
                </div>
              </div>

              <div>
                <Label className="text-muted-foreground">Description</Label>
                <p className="text-sm mt-1">{selectedFile.description}</p>
              </div>

              <div>
                <Label className="text-muted-foreground">Status</Label>
                <div className="mt-1">{getStatusBadge(selectedFile.status)}</div>
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <FileAudio className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalFiles}</p>
                <p className="text-sm text-muted-foreground">Total Files</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Volume2 className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {totalSize > 1024 ? `${(totalSize / 1024).toFixed(1)} MB` : `${Math.round(totalSize)} KB`}
                </p>
                <p className="text-sm text-muted-foreground">Total Storage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Mic className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {voiceFiles.filter(file => file.status === 'active').length}
                </p>
                <p className="text-sm text-muted-foreground">Active Files</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Clock className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {voiceFiles.reduce((sum, file) => sum + file.usageCount, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Usage</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Voice Files Table */}
      <Card>
        <CardHeader>
          <CardTitle>Voice File Library</CardTitle>
          <CardDescription>
            Manage your audio files used in IVR flows and system messages
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-x-auto px-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {voiceFiles.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{file.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{file.filename}</TableCell>
                    <TableCell className="font-mono">{file.duration}</TableCell>
                    <TableCell>
                      <span className={file.usageCount > 50 ? 'text-success font-semibold' : ''}>
                        {file.usageCount}
                      </span>
                    </TableCell>
                    <TableCell>{getStatusBadge(file.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handlePlayPause(file.id)}
                          disabled={file.status !== 'active'}
                        >
                          {playingId === file.id ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(file.filename)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFileView(file)}
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(file.id)}
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

          {voiceFiles.length === 0 && (
            <div className="text-center py-8">
              <FileAudio className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3>No Voice Files</h3>
              <p className="text-muted-foreground mb-4">
                Upload your first audio file to get started
              </p>
              <Button onClick={() => setIsUploadDialogOpen(true)}>
                <Upload className="h-4 w-4 mr-2" />
                Upload First File
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recording Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Voice Recording Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4>Technical Requirements:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Sample Rate: 8kHz or 16kHz recommended</li>
                <li>• Bit Depth: 16-bit minimum</li>
                <li>• Format: MP3, WAV, AAC, or M4A</li>
                <li>• File Size: Maximum 10MB per file</li>
                <li>• Duration: Keep messages under 30 seconds</li>
              </ul>
            </div>
            <div>
              <h4>Recording Best Practices:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Record in a quiet environment</li>
                <li>• Use a good quality microphone</li>
                <li>• Speak clearly and at a moderate pace</li>
                <li>• Leave brief pauses between options</li>
                <li>• Test recordings before uploading</li>
                <li>• Consider professional voice talent for key messages</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}