import React from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { IVRFlows } from '../IVRFlows';

// For now, IVRFlows will internally manage both the dialog and the trigger button
// We'll refactor later to move the button to the header
export function IVRFlowsPage() {
  return (
    <DashboardLayout>
      <IVRFlows />
    </DashboardLayout>
  );
}
