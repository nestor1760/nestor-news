"use client"

import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'
import { ISessionProps } from '../types/types'

const ProviderSession: FC<ISessionProps> = ({ children }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default ProviderSession