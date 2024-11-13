'use client'

import StyledImage from '@/app/UI/Image/Image';
import { getCorrectDateFormat } from '../ArticleCard/utills';
import CenteredDiv from '../CenteredDiv/CenteredDiv';
import { IArticlesPageProps } from '@/app/types/types';
import ArticlePageInfo from './ArticlePageInfo.tsx/ArticlePageInfo';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/UI/Button/Button';
import { useAppSelector } from '@/app/hook';

const ArticlePage = ({ title }: IArticlesPageProps) => {
  const router = useRouter()
  const { data } = useAppSelector(state => state.articles)

  const decodeTitle = decodeURIComponent(title as string).replace(/-/g, ' ');
  const article = data.find((art) => art.title.toLowerCase() === decodeTitle.toLowerCase());

  if (!article) {
    return (
      <CenteredDiv>
        Article not found...
      </CenteredDiv>
    );
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='flex w-full items-center justify-start p-6'>
      <div className='flex w-full flex-col items-start justify-start lg:flex-row lg:justify-center'>
        <div className='h-full'>
          <Button onClick={handleBack}>Go back</Button>
          <StyledImage
            title={article.title}
            urlToImage={article.urlToImage}
            className='w-[600px] object-contain mt-4'
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


