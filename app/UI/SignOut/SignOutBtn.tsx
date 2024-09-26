"use client"

import { signOut } from "next-auth/react"
import { Button } from "../Button/Button"
import { TbLogout2 } from "react-icons/tb";

const SignOutBtn = () => {
  return (
    <Button
      onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`
      })}
      variant='destructive'
    >
      <TbLogout2 size={20} className="mr-[10px]" />
      Logout
    </Button>

  )
}

export default SignOutBtn