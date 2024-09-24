"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

const User = () => {
  const { data: session } = useSession()

  return (
    <div>{JSON.stringify(session)}</div>
  )
}

export default User