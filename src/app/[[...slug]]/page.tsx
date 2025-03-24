import { ClientOnly } from './client'

export const metadata = {
  title: 'Mathew Lewallen Portfolio',
  description: 'Personal website of Mathew Lewallen – Full-Stack Developer, SaaS Creator, and Researcher.',
  openGraph: {
    title: 'Mathew Lewallen Portfolio',
    description: 'Explore projects, research, and OSS by Mathew Lewallen.',
    images: ['https://www.mathewlewallen.com/logo512.png'], // make sure this image is accessible
    url: 'https://www.mathewlewallen.com',
    siteName: 'mathewlewallen.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mathew Lewallen Portfolio',
    description: 'Explore projects, research, and OSS by Mathew Lewallen.',
    images: ['https://www.mathewlewallen.com/logo512.png'],
    creator: '@Cloud_Context_',
  },
}

export default function Page() {
  return <ClientOnly />
}
