import Sidebar from '@/app/components/Sidebar/Sidebar';
import { authOptions } from '@/app/lib/authOptions';
import { buttonVariants } from '@/app/UI/Button/Button';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';

const User = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) return <Sidebar />

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <h2 className='text-2xl mb-3'>Please login to see your user page</h2>
      <Link
        href='/sign-in'
        className={buttonVariants()}
      >
        Login
      </Link>
    </div>
  )
}

export default User