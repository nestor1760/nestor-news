import ArticlesList from '@/app/components/ArticlesList/ArticlesList'
import { authOptions } from '@/app/lib/authOptions';
import { fetchArticlesFromAPI } from '@/app/lib/fetchArticles';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  let articles = [];
  let error = undefined;

  try {
    articles = await fetchArticlesFromAPI();
  } catch (err) {
    error = err instanceof Error ? err.message : 'An unexpected error occurred';
  }

  if (session) {
    return <ArticlesList initialArticles={articles} error={error} />
  } else {
    redirect("/sign-in");
  }
}

export default page