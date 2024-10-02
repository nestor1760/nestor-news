"use client"

import { signOut } from "next-auth/react"
import { Button } from "../Button/Button"
import { TbLogout } from "react-icons/tb";

const SignOutBtn = () => {
  return (
    <Button
      onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`
      })}
      variant='destructive'
    >
      <TbLogout size={20} className="mr-[10px]" />
      Logout
    </Button>

  )
}

export default SignOutBtn