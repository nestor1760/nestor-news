import SignIn from '@/app/(auth)/sign-in/page';
import { authOptions } from '@/app/lib/authOptions';
import UserPage from '@/app/pages/UserPage';
import { getServerSession } from 'next-auth/next';

const User = async () => {
  const session = await getServerSession(authOptions)

  return (
    (session?.user) ? <UserPage /> : <SignIn />
  )
}

export default User