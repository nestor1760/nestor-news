import { authOptions } from '@/app/lib/authOptions';
import { buttonVariants } from '@/app/UI/Button/Button';
import SignOutBtn from '@/app/UI/SignOut/SignOutBtn';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';

const Admin = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    return (
      <div className='flex items-center justify-center h-screen flex-col'>
        {(session?.user.image)
          ? <Image src={session?.user.image} alt='avatar' width={80} height={80} className='rounded-full' />
          : null
        }
        <h2 className='text-3xl my-3'>Admin page - welcome back {(session?.user.username) ? session?.user.username : session?.user.name}</h2>
        <SignOutBtn />
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <h2 className='text-2xl mb-3'>Please login to see your admin page</h2>
      <Link
        href='/sign-in'
        className={buttonVariants()}
      >
        Login
      </Link>
    </div>
  )
}

export default Admin