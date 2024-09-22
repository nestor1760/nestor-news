import { FC, ReactNode } from 'react';
import { Button } from './Button';
import { signIn } from 'next-auth/react';


interface SignInBtnProps {
  children: ReactNode;
  signInMethod: string
}
const SignInBtn: FC<SignInBtnProps> = ({ children, signInMethod }) => {
  const loginWithSocial = () => signIn(signInMethod);

  return (
    <Button onClick={loginWithSocial} className='w-full'>
      {children}
    </Button>
  );
};

export default SignInBtn;