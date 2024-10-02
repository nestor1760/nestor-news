import { ArticlesProps } from '@/app/types/types'
import React, { FC } from 'react'

const ArticlesItem: FC<ArticlesProps> = ({ title, url, urlToImage }) => {
  return (
    <div
      key={url}
      className="w-[350px] bg-white p-4 rounded shadow-md flex items-start justify-start flex-col"
    >
      <img src={urlToImage} alt={title} className="w-full h-[250px] object-cover rounded" />
      <h4 className="text-sm mt-2 font-bold">{title}</h4>
    </div>
  )
}

export default ArticlesItem