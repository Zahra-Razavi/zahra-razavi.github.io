import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardSelector } from './DashboardSelector';

export function TestRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardSelector />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}