import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    SITE_TITLE: z.string(),
    SITE_DESCRIPTION: z.string(),
    SITE_IMAGE: z.string(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BASE_PATH: z.string().optional(),
  },
  runtimeEnv: {
    SITE_TITLE: process.env.SITE_TITLE,
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
    SITE_IMAGE: process.env.SITE_IMAGE,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  },
});