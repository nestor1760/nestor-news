import React, { FC } from 'react'
import { getCorrectDateFormat } from '../utills'
import { ICardInfoProps } from '@/app/types/types'

const CardBody: FC<ICardInfoProps> = ({ author, publishedAt, title }) => {
  return (
    <div className='w-[90%] flex items-start justify-center flex-col mt-4 mb-7 h-full'>
      <p className="text-[12px] font-bold text-gray-400 mb-4">{getCorrectDateFormat(publishedAt as string)}</p>
      <p className="text-[12px] font-bold mb-4 decoration-solid underline">{author ? author : 'Unknown author'}</p>
      <p className="text-[20px] font-bold mb-[20px]">{title}</p>
      <div className="flex-grow"></div>
    </div>
  )
}

export default CardBody