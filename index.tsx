import { VemetricScript } from '@vemetric/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <VemetricScript token={import.meta.env.VITE_VEMETRIC_TOKEN} />
    <App />
  </React.StrictMode>
);