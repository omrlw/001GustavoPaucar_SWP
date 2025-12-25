import React, { Suspense, lazy, useEffect, useState } from 'react';

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

export default DeferredAnalytics;
