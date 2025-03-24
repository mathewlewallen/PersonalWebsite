'use client'

import React from 'react'
import '../globals.css'
import dynamic from 'next/dynamic'
import CONFIG from '../../../personalwebsite.config'

const App = dynamic(() => import('@cc/components/personalwebsite'), {
  ssr: false,
})

export function ClientOnly() {
  return <App config={CONFIG} />
}
