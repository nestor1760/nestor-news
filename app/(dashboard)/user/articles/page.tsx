import ArticlesList from '@/app/components/ArticlesList/ArticlesList'
import { authOptions } from '@/app/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    return <ArticlesList />
  } else {
    redirect("/sign-in");
  }
}

export default page