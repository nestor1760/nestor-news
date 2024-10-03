'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button } from '@/app/UI/Button/Button';
import SignInGoogle from '@/app/UI/SignInGoogle/SignInGoogle';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/app/UI/Form/Input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/UI/Form/Form';
import { useToast } from '@/app/hooks/use-toast';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from 'react';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

const SignInForm = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false
    });

    if (signInData?.error) {
      toast({
        title: "Error",
        description: "Oops! Something went wrong!",
        variant: 'destructive'
      })
    } else {
      router.push('/user')
      router.refresh()
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
              <p className='text-2xl font-bold'>Login</p>
            </div>
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
                    <div className='relative'>
                      <Input
                        type={visible ? 'text' : 'password'}
                        placeholder='Enter your password'
                        {...field}
                      />
                      <div className='absolute top-2 right-2 cursor-pointer' onClick={() => setVisible(prev => !prev)}>
                        {visible ? <IoEyeOffOutline size={23} /> : <IoEyeOutline size={23} />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className='w-full mt-6'
            variant={'secondary'}
            type='submit'
          >
            Sign in
          </Button>
        </form>
        <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
          or
        </div>
        <SignInGoogle />
        <p className='text-center text-sm text-gray-600 mt-4'>
          If you don&apos;t have an account, please&nbsp;
          <Link
            className='text-blue-500 hover:underline'
            href='/sign-up'
          >
            Sign up
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default SignInForm;