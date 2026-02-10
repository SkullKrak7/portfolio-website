'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development only
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    // Production metrics handled by Vercel Speed Insights
  });

  return null;
}
