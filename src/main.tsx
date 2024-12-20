import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { TwaAnalyticsProvider } from '@tonsolutions/telemetree-react';

import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <TwaAnalyticsProvider
        projectId={import.meta.env.VITE_TWA_PROJECT_ID}
        apiKey={import.meta.env.VITE_TWA_API_KEY}
        appName={import.meta.env.VITE_TWA_APP_NAME}
      >
        <App />
      </TwaAnalyticsProvider>
    </HashRouter>
  </React.StrictMode>,
);
