'use client'

import StyledImage from '@/app/UI/Image/Image';
import { getCorrectDateFormat } from '../ArticleCard/utills';
import CenteredDiv from '../CenteredDiv/CenteredDiv';
import { IArticle, IArticlesPageProps } from '@/app/types/types';
import ArticlePageInfo from './ArticlePageInfo.tsx/ArticlePageInfo';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/UI/Button/Button';
import { fetchArticleByTitle } from '@/app/lib/fetchArticles';
import { useEffect, useState } from 'react';

const ArticlePage = ({ title }: IArticlesPageProps) => {
  const router = useRouter()
  const [article, setArticle] = useState<IArticle | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await fetchArticleByTitle(title);
        setArticle(fetchedArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    }
    fetchArticle()
  }, [title])

  const handleBack = () => {
    router.back()
  }

  if (!article) {
    return (
      <CenteredDiv>
        <div className='flex flex-col items-center'>
          <p className='mb-6'>Article not found...</p>
          <Button onClick={handleBack}>Go back</Button>
        </div>
      </CenteredDiv>
    );
  }

  return (
    <div className='flex w-full items-center justify-start p-6 overflow-y-auto'>
      <div className='flex w-full flex-col items-start justify-start lg:flex-row lg:justify-center'>
        <div className='h-full flex flex-col'>
          <Button onClick={handleBack} className='self-end lg:self-start'>Go back</Button>
          <StyledImage
            title={article.title}
            urlToImage={article.urlToImage}
            className='min-w-[450px] w-[600px] object-contain mt-4'
          />
          <div className='flex w-full items-center justify-between my-3'>
            <p>{article.author ? article.author : 'Unknown author'}</p>
            <p>{article.publishedAt ? getCorrectDateFormat(article.publishedAt) : 'Unknown date'}</p>
          </div>
        </div>
        <ArticlePageInfo
          title={article.title}
          description={article.description}
          path={article.url}
        />
      </div>
    </div>
  )
}

export default ArticlePage


