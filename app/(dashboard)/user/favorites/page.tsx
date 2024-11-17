import FavouritesList from '@/app/components/FavouritesList/FavouritesList'
import { authOptions } from '@/app/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    return <FavouritesList />
  } else {
    redirect("/sign-in");
  }
}

export default page