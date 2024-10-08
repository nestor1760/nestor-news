'use client'

import StyledImage from '@/app/UI/Image/Image';
import { getCorrectDateFormat } from '../ArticleCard/utills';
import CenteredDiv from '../CenteredDiv/CenteredDiv';
import { IArticlesPageProps } from '@/app/types/types';
import Link from 'next/link';
import ArticlePageInfo from './ArticlePageInfo.tsx/ArticlePageInfo';


const ArticlePage = ({ articles, title }: IArticlesPageProps) => {
  const decodeTitle = decodeURIComponent(title as string).replace(/-/g, ' ');

  const article = articles.find((art) => art.title.toLowerCase() === decodeTitle.toLowerCase());

  if (!article) {
    return (
      <CenteredDiv>
        Article not found
      </CenteredDiv>
    );
  }

  return (
    <CenteredDiv>
      <div className='flex flex-col items-start justify-start p-6 mx-7 max-w-[900px] bg-white shadow-custom rounded-md'>
        <div className='flex flex-col my-6'>
          <StyledImage
            title={article.title}
            urlToImage={article.urlToImage}
            className='w-[600px] object-contain'
          />
          <div className='flex w-full items-center justify-between'>
            <p>{article.author ? article.author : 'Unknown author'}</p>
            <p>{article.publishedAt ? getCorrectDateFormat(article.publishedAt) : 'Unknown date'}</p>
          </div>
        </div>
        <ArticlePageInfo
          title={article.title}
          description={article.description}
        />
        <Link
          href={article.url}
          target='_blank'
          className='px-4 py-2 bg-black text-white rounded-lg mt-4 duration-200 hover:bg-slate-700'
        >
          Read more
        </Link>
      </div>
    </CenteredDiv>
  )
}

export default ArticlePage


