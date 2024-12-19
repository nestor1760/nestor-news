import CenteredDiv from '@/app/components/CenteredDiv/CenteredDiv'
import { authOptions } from '@/app/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  console.log(session?.user);


  if (session) {
    return (
      <CenteredDiv>
        Welcome back!
      </CenteredDiv>
    )
  } else {
    redirect("/sign-in");
  }
}

export default page