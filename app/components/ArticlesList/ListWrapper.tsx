import { WrapperListProps } from '@/app/types/types'
import React, { FC } from 'react'

const ListWrapper: FC<WrapperListProps> = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`${className} w-full h-full overflow-y-auto flex items-start justify-center scrollbar-thin scrollbar-thumb-transparent pb-10`}
    >
      {children}
    </div>
  )
}

export default ListWrapper