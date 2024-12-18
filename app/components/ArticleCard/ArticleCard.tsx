'use client'

import { ArticlesProps } from '@/app/types/types'
import { FC } from 'react'
import { Button } from '@/app/UI/Button/Button'
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import Link from 'next/link'
import CardBody from './CardPart/CardInfo'
import StyledImage from '@/app/UI/Image/Image'
import { useAppDispatch, useAppSelector } from '@/app/hook'
import { addItem, removeItem } from '@/app/store/favouritesSlice'

const ArticleCard: FC<ArticlesProps> = ({ title, author, urlToImage, publishedAt }) => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.favourites)

  const isSelected = data.some((article) => article.title === title)

  const toggleFavourite = () => {
    if (isSelected) {
      dispatch(removeItem(title))
    } else {
      dispatch(addItem({ title, author, urlToImage, publishedAt }))
    }
  }

  const path = title !== undefined ? `/user/articles/${encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase())}` : ''

  return (
    <div className='w-[350px] bg-white shadow-none flex items-center justify-start flex-col relative duration-200 hover:shadow-custom border-[1px] border-black'>
      <Link href={path}>
        <div className='flex items-center justify-center flex-col'>
          <StyledImage
            title={title}
            urlToImage={urlToImage}
            className='w-full max-h-[200px] object-contain'
          />
          <CardBody
            author={author}
            publishedAt={publishedAt}
            title={title}
          />
        </div>
      </Link>
      <Button
        variant={'ghost'}
        size={'icon'}
        className='absolute right-2 top-2 z-100'
        onClick={toggleFavourite}
      >
        {(isSelected)
          ? <FaHeart size={20} color='red' />
          : <FaRegHeart size={20} color='gray' />
        }
      </Button>
    </div>
  )
}

export default ArticleCard