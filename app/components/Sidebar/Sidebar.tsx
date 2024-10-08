import SignOutBtn from '@/app/UI/SignOut/SignOutBtn';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const Sidebar = () => {
  return (
    <div className='bg-white h-screen w-full max-w-[300px] flex flex-col border-r-[1px] border-stone-400 text-stone-500 rounded-tr-lg rounded-br-lg z-50'>
      <SidebarHeader />
      <SidebarMenu />
      <div className='mt-auto p-6 border-t-[1px] border-stone-400'>
        <SignOutBtn />
      </div>
    </div>
  )
}

export default Sidebar