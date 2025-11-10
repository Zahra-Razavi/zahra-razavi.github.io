export default function ComponentKitSimple() {
  return (
    <div style={{
      padding: '40px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          marginBottom: '20px',
          color: '#4E0F60'
        }}>
          ✅ Component Kit Is Working!
        </h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
          The route is now functional. We can now build out the full component showcase.
        </p>
        
        <div style={{
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Test Section</h2>
          <p>This is a test component kit page. If you can see this, the routing is working correctly.</p>
        </div>
      </div>
    </div>
  );
}
