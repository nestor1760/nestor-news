'use client'

import StyledImage from '@/app/UI/Image/Image';
import { getCorrectDateFormat } from '../ArticleCard/utills';
import CenteredDiv from '../CenteredDiv/CenteredDiv';
import { IArticlesPageProps } from '@/app/types/types';
import Link from 'next/link';
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
    <div className='flex flex-col items-start justify-between p-6 w-full'>
      <Button onClick={handleBack}>Go back</Button>
      <div className='flex'>
        <div className='flex flex-col'>
          <StyledImage
            title={article.title}
            urlToImage={article.urlToImage}
            className='w-[600px] object-cover'
          />
          <div className='flex w-full items-center justify-between'>
            <p>{article.author ? article.author : 'Unknown author'}</p>
            <p>{article.publishedAt ? getCorrectDateFormat(article.publishedAt) : 'Unknown date'}</p>
          </div>
        </div>
        <div className="border-solid border-[1px] border-black">
          <ArticlePageInfo
            title={article.title}
            description={article.description}
          />
          <Link
            href={article.url}
            target='_blank'
            className='bg-blue-600 text-white hover:bg-blue-600/80 px-4 py-2 rounded-lg mt-4 duration-200'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage


