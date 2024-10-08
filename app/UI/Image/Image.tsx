import { IImageProps } from '@/app/types/types'
import { FC } from 'react'

const StyledImage: FC<IImageProps> = ({ title, urlToImage, className }) => {
  return (
    <img
      src={urlToImage ? urlToImage : '/media/no-image.svg'}
      alt={title as string}
      className={className}
    />
  )
}

export default StyledImage