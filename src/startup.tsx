import { createRoot } from 'react-dom/client';
import { App } from './App.js';
import { StrictMode } from 'react';

const el = document.getElementById('root');

if (!el) {
  throw new Error('missing el');
}

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
