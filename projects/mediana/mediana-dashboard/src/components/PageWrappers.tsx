import React, { useState, useRef } from 'react';
import { CallLogs } from './CallLogs';
import { IVRFlows } from './IVRFlows';
import { IVRVoices } from './IVRVoices';
import { Lines } from './Lines';
import { Button } from './ui/button';
import { Download, Plus, Upload } from 'lucide-react';

// CallLogs with Export button
export function CallLogsWithActions() {
  const headerActions = (
    <Button variant="outline" size="sm">
      <Download className="h-4 w-4 mr-2" />
      Export
    </Button>
  );
  
  return { content: <CallLogs />, headerActions };
}

// IVRFlows with Create Flow button
export function IVRFlowsWithActions() {
  const ivrFlowsRef = useRef<{ openDialog: () => void }>(null);
  
  const headerActions = (
    <Button onClick={() => ivrFlowsRef.current?.openDialog()}>
      <Plus className="h-4 w-4 mr-2" />
      Create Flow
    </Button>
  );
  
  return { content: <IVRFlows ref={ivrFlowsRef} />, headerActions };
}

// IVRVoices with Upload button  
export function IVRVoicesWithActions() {
  const ivrVoicesRef = useRef<{ openDialog: () => void }>(null);
  
  const headerActions = (
    <Button onClick={() => ivrVoicesRef.current?.openDialog()}>
      <Upload className="h-4 w-4 mr-2" />
      Upload Voice File
    </Button>
  );
  
  return { content: <IVRVoices ref={ivrVoicesRef} />, headerActions };
}

// Lines with Add Extension button
export function LinesWithActions() {
  const linesRef = useRef<{ openDialog: () => void }>(null);
  
  const headerActions = (
    <Button onClick={() => linesRef.current?.openDialog()}>
      <Plus className="h-4 w-4 mr-2" />
      Add Extension
    </Button>
  );
  
  return { content: <Lines ref={linesRef} />, headerActions };
}
