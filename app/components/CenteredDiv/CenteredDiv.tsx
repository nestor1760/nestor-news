import React, { ReactNode } from 'react'

const CenteredDiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      {children}
    </div>
  )
}

export default CenteredDiv