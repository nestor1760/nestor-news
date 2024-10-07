'use client'

import CenteredDiv from '../CenteredDiv/CenteredDiv'
import { IArticlesPageProps } from '@/app/types/types'


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
      <div className='flex flex-col items-center justify-center my-[10%] border-solid border-2 border-black'>
        <img
          src={article.urlToImage}
          alt={article.title}
          className='w-[400px] h-[300px] object-contain'
        />
        <h3>{article.title}</h3>
        <h3>{article.description}</h3>
        <p>{article.content}</p>
      </div>
    </CenteredDiv>
  )
}

export default ArticlePage


