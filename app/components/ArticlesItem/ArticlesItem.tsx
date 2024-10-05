import { ArticlesProps } from '@/app/types/types'
import React, { FC } from 'react'
import { getCorrectDateFormat } from './utills'
import { Button } from '@/app/UI/Button/Button'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import Link from 'next/link';

const ArticlesCard: FC<ArticlesProps> = ({ title, author, urlToImage, publishedAt, url }) => {
  return (
    <div className="w-[350px] bg-white shadow-custom flex items-center justify-start flex-col relative">
      <img
        src={urlToImage ? urlToImage : '/media/no-image.svg'}
        alt={title as string}
        className="w-full max-h-[200px] object-contain"
      />
      <div className='w-[80%] flex items-start justify-center flex-col mt-4 mb-7 h-full'>
        <p className="text-[12px] font-bold text-gray-400 mb-4">{getCorrectDateFormat(publishedAt as string)}</p>
        <p className="text-[12px] font-bold mb-4 decoration-solid underline">{author ? author : 'Unknown author'}</p>
        <p className="text-[20px] font-bold mb-[20px]">{title}</p>
        <div className="flex-grow"></div>
        <Link
          href={url as string}
          target='_blank'
          className='flex items-center justify-start duration-200 hover:text-blue-800 hover:underline'
        >
          Read more
          <FaRegArrowAltCircleRight size={20} className='ml-1' />
        </Link>
      </div>
      <Button
        variant={'ghost'}
        size={'icon'}
        className='absolute right-2 top-2'
      >
        <FaRegHeart size={20} color='gray' />
      </Button>
    </div>
  )
}

export default ArticlesCard