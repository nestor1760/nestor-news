import { IArticlePageInfoProps } from '@/app/types/types'
import Link from 'next/link'
import { FC } from 'react'

const ArticlePageInfo: FC<IArticlePageInfoProps> = ({ description, title, path }) => {

  return (
    <div className='flex flex-col justify-between items-start ml-0 lg:ml-5'>
      <div>
        <h2 className='font-bold text-2xl mb-6'>{title}</h2>
        <p className='italic'>{description}</p>
      </div>
      <Link
        href={path as string}
        target='_blank'
        className='bg-blue-600 text-white hover:bg-blue-600/80 px-4 py-2 rounded-lg mt-4 duration-200'
      >
        Read more
      </Link>
    </div>

  )
}

export default ArticlePageInfo


