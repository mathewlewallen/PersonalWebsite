'use client';
import '@ml/app/globals.css';
import dynamic from 'next/dynamic';
import CONFIG from '@/personalwebsite.config';

const App = dynamic(() => import('@ml/components/personalwebsite'), {
  ssr: false,
});

export function ClientOnly() {
  return <App config={CONFIG} />;
}
