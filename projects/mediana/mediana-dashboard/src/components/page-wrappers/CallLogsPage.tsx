import React from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { CallLogs, CallLogsHeaderActions } from '../CallLogs';

export function CallLogsPage() {
  return (
    <DashboardLayout headerActions={<CallLogsHeaderActions />}>
      <CallLogs />
    </DashboardLayout>
  );
}
