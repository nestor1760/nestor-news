import { TAvatarProps } from "@/app/types/types"
import Image from "next/image"
import { FC } from "react"

const Avatar: FC<TAvatarProps> = ({ path }) => {

  const defPath = '/media/default-avatar.svg'

  return (
    <Image
      src={path ? path : defPath}
      alt='user-avatar'
      width={60}
      height={60}
      className='rounded-full'
    />
  )
}

export default Avatar