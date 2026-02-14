import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  useEffect(() => {
    // Redirect to the standalone portfolio
    window.location.href = '/portfolio';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#080f1e',
      color: '#fff',
      fontFamily: 'Outfit, sans-serif'
    }}>
      <p>Carregando portfolio...</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
