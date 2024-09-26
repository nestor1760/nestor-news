'use client';

import { useForm } from 'react-hook-form';

import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/UI/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/UI/Form/Form';
import SignInGoogle from '@/app/UI/SignInGoogle/SignInGoogle';
import { Input } from '@/app/UI/Form/Input';
import { useToast } from '@/app/hooks/use-toast';

const FormSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const responce = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      })
    })

    if (responce.ok) {
      router.push('/sign-in')
    } else {
      toast({
        title: "Error",
        description: "Oops! Something went wrong!",
        variant: 'destructive'
      })
    }
  };

  return (
    <Form {...form}>
      <div className='w-[350px] rounded-lg p-4 shadow-custom border-solid border-[1px] text-stone-500 border-stone-400'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full'
        >
          <div className='space-y-2'>
            <div className='w-full flex items-center justify-center'>
              <p className='text-2xl font-bold'>Registration</p>
            </div>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='mail@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-Enter your password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Re-Enter your password'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className='w-full mt-6'
            type='submit'
            variant={'secondary'}
          >
            Sign up
          </Button>
        </form>
        <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
          or
        </div>
        <SignInGoogle />
        <p className='text-center text-sm text-gray-600 mt-4'>
          If you have an account, please&nbsp;
          <Link
            className='text-blue-500 hover:underline'
            href='/sign-in'
          >
            Sign in
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default SignUpForm;