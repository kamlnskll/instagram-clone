import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { UserContextProvider } from './context/auth.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
<UserContextProvider>
    <App />
</UserContextProvider>
  </React.StrictMode>
);
