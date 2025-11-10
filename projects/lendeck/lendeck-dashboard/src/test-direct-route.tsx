import { BrowserRouter, Routes, Route } from 'react-router-dom';

function TestPage() {
  return (
    <div style={{ 
      padding: '100px', 
      backgroundColor: '#FF0000', 
      minHeight: '100vh',
      color: 'white',
      fontSize: '72px',
      fontWeight: 'bold'
    }}>
      RED SCREEN TEST - IF YOU SEE THIS THE ROUTE WORKS
    </div>
  );
}

export default function TestDirectRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: '100px', background: 'blue', minHeight: '100vh', color: 'white', fontSize: '48px' }}>HOME ROUTE</div>} />
        <Route path="/design-system/components" element={<TestPage />} />
        <Route path="*" element={<div style={{ padding: '100px', background: 'green', minHeight: '100vh', color: 'white', fontSize: '48px' }}>CATCH ALL ROUTE - PATH: {window.location.pathname}</div>} />
      </Routes>
    </BrowserRouter>
  );
}
