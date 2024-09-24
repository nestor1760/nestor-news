import { ReactNode } from 'react';
import { Button } from './Button';
import { signIn } from 'next-auth/react';

const SignInGithub = ({ children }: { children: ReactNode }) => {
  const loginWithGithub = () => signIn(
    'github',
    { callbackUrl: 'http://localhost:3000/admin' }
  );

  return (
    <Button
      onClick={loginWithGithub}
      className='w-full'
    >
      {children}
    </Button>
  );
};

export default SignInGithub;