import { authOptions } from '@/app/lib/authOptions'
import Avatar from '@/app/UI/Avatar/Avatar'
import SignOutBtn from '@/app/UI/SignOut/SignOutBtn'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { CiCircleList } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

const Sidebar = async () => {
  const session = await getServerSession(authOptions)

  const menuData = [
    { id: 1, name: 'Home', path: '/user/home', icon: <FaHome size={20} className='mr-[10px]' /> },
    { id: 2, name: 'Articles', path: '/user/articles', icon: <CiCircleList size={20} className='mr-[10px]' /> },
    { id: 3, name: 'Favorites', path: '/user/favorites', icon: <MdOutlineFavorite size={20} className='mr-[10px]' /> },
  ]

  return (
    <div className='bg-white h-screen w-full max-w-[300px] flex flex-col border-r-[1px] border-stone-400 text-stone-500 rounded-tr-lg rounded-br-lg z-50'>
      <div className='w-full flex items-start p-6'>
        <Avatar path={session?.user.image ? session?.user.image : ''} />
        <p className='ml-[10px] font-bold'>
          {session?.user.name ? session?.user.name : session?.user.username}
        </p>
      </div>
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
      <div className='mt-auto p-6 border-t-[1px] border-stone-400'>
        <SignOutBtn />
      </div>
    </div>
  )
}

export default Sidebar