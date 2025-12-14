/* eslint-disable react-refresh/only-export-components */
import React, { StrictMode, Suspense, lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/fonts.css';
import './index.css';
import App from './App.jsx';

const Analytics = lazy(() =>
  import('@vercel/analytics/react').then((module) => ({ default: module.Analytics }))
);

const DeferredAnalytics = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!import.meta.env.PROD) return undefined;

    const enable = () => setEnabled(true);

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enable, { timeout: 2000 });
      return () => window.cancelIdleCallback?.(id);
    }

    const timeoutId = window.setTimeout(enable, 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DeferredAnalytics />
  </StrictMode>
);
