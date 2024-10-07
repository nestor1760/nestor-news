'use client'

import { getCorrectDateFormat } from '../ArticleCard/utills';
import CenteredDiv from '../CenteredDiv/CenteredDiv';
import { IArticlesPageProps } from '@/app/types/types';


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
  article.url
  article.content
  article.author
  article.publishedAt

  return (
    <CenteredDiv>
      <div className='flex flex-col items-center justify-start p-6 mx-7 max-w-[900px] border-solid border-2 border-black'>
        <div className='flex flex-col my-10'>
          <img
            src={article.urlToImage}
            alt={article.title}
            className='w-[700px] object-contain'
          />
          <div className='flex w-full items-center justify-between'>
            <p>{article.author ? article.author : 'Unknown author'}</p>
            <p>{article.publishedAt ? getCorrectDateFormat(article.publishedAt) : 'Unknown date'}</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      </div>
    </CenteredDiv>
  )
}

export default ArticlePage


