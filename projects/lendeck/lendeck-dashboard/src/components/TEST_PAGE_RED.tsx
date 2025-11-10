export default function TEST_PAGE_RED() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FF0000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '48px',
      fontWeight: 'bold',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      🔴 RED TEST PAGE - ROUTE WORKS! 🔴
    </div>
  );
}
