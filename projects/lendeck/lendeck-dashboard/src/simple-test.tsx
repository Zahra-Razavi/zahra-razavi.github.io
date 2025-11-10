import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardSelector } from './components/DashboardSelector';

export default function SimpleTest() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DashboardSelector />} />
      </Routes>
    </BrowserRouter>
  );
}