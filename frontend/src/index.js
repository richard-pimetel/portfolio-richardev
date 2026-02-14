import React from 'react';
import ReactDOM from 'react-dom/client';

// Portfolio is served as static HTML via public/index.html
// This file exists only for React build compatibility
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<React.Fragment />);
}
