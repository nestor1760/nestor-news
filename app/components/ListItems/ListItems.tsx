import { TListProps } from '@/app/types/types'
import { FC } from 'react'

const ListItems: FC<TListProps> = ({ children }) => {
  return (
    <div className={`flex w-full items-stretch justify-center flex-wrap gap-4`}>
      {children}
    </div>
  )
}

export default ListItems