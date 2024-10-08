import Link from 'next/link'
import React from 'react'
import { CiCircleList } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

const SidebarMenu = () => {
  const menuData = [
    { id: 1, name: 'Home', path: '/user/home', icon: <FaHome size={20} className='mr-[10px]' /> },
    { id: 2, name: 'Articles', path: '/user/articles', icon: <CiCircleList size={20} className='mr-[10px]' /> },
    { id: 3, name: 'Favorites', path: '/user/favorites', icon: <MdOutlineFavorite size={20} className='mr-[10px]' /> },
  ]

  return (
    <div className='flex flex-col items-center justify-start h-full border-[1px] p-6'>
      {menuData.map(item =>
        <Link
          href={item.path}
          className='w-full flex items-center justify-start hover:bg-blue-500 hover:text-white h-11 rounded-md py-5 px-4'
          key={item.id}
        >
          {item.icon}
          <p>{item.name}</p>
        </Link>
      )}
    </div>
  )
}

export default SidebarMenu