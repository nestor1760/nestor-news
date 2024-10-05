import { Button } from '../Button/Button';
import { signIn } from 'next-auth/react';

const SignInGoogle = () => {
  const loginWithGoogle = () => signIn(
    'google',
    { callbackUrl: 'http://localhost:3000/user/home' }
  );

  return (
    <Button onClick={loginWithGoogle} className='w-full' variant={'secondary'}>
      Sign in with Google
    </Button>
  );
};

export default SignInGoogle;