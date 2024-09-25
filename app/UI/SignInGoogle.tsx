import { Button } from './Button';
import { signIn } from 'next-auth/react';

const SignInGoogle = () => {
  const loginWithGoogle = () => signIn(
    'google',
    { callbackUrl: 'http://localhost:3000/admin' }
  );

  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      Sign in with Google
    </Button>
  );
};

export default SignInGoogle;