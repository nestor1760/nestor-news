import { ReactNode } from 'react';
import { Button } from './Button';
import { signIn } from 'next-auth/react';

const SignInGoogle = ({ children }: { children: ReactNode }) => {
  const loginWithGoogle = () => signIn(
    'google',
    { callbackUrl: 'http://localhost:3000/admin' }
  );

  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

export default SignInGoogle;