import { IArticlePageInfoProps } from '@/app/types/types'
import React, { FC } from 'react'

const ArticlePageInfo: FC<IArticlePageInfoProps> = ({ description, title }) => {
  return (
    <div className='flex flex-col items-start justify-center w-[600px]'>
      <h2 className='font-bold text-2xl mb-6'>{title}</h2>
      <p className='italic'>{description}</p>
    </div>
  )
}

export default ArticlePageInfo