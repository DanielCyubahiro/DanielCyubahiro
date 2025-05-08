'use client';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Input} from '@/app/components/common/ui/input';
import {Textarea} from '@/app/components/common/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/components/common/ui/form';
import {Button} from '@/app/components/common/ui/button';
import {useEffect, useState} from 'react';
import {Alert, AlertDescription, AlertTitle} from '@/app/components/common/ui/alert';
import {AlertCircle, CheckCircle} from 'lucide-react';
import Footer from '@/app/components/layout/Footer';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(50),
});

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleSubmit = async (formData) => {
    const data = {
      ...formData,
      access_key: '53f73977-da31-4dc5-9c36-92b468f2965b',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setMessage(json.message);
        form.reset();
      } else {
        setIsSuccess(false);
        setMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Client Error. Please check the console.log for more info');
      console.log(error);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Clean up on unmount
    }
  }, [message]);

  return (
      <div
          id="contact"
          className={'h-screen pt-20 flex flex-col snap-start'}
      >
        <section
            className="w-full px-[12%] py-20 scroll-mt-2 flex flex-col grow"
        >
          <h2 className="text-center text-5xl mb-20">
            Contact
          </h2>
          {message && (
              <div
                  className="fixed top-20 lg:top-25 right-4 z-40 animate-fade-in">
                <Alert
                    variant={isSuccess ? 'default' : 'destructive'}
                    className="shadow-lg"
                >
                  {isSuccess ? (
                      <CheckCircle className="h-4 w-4" color={'#00ff11'}/>
                  ) : (
                      <AlertCircle className="h-4 w-4" color={'#ff0000'}/>
                  )}
                  <AlertTitle>{isSuccess ? 'Done!' : 'Error'}</AlertTitle>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              </div>
          )}
          <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className={'space-y-8 flex flex-wrap justify-between '}
            >
              <section className={'lg:w-[49%] w-full'}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder={'Enter you name'} {...field}/>
                          </FormControl>
                          <FormDescription>
                            e.g. Jane Doe
                          </FormDescription>
                        </FormItem>
                    )}
                />
              </section>
              <section className={'lg:w-[49%] w-full'}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder={'Enter you email'} {...field}/>
                          </FormControl>
                          <FormDescription>
                            e.g. janedoe@gmail.com
                          </FormDescription>
                        </FormItem>
                    )}
                />
              </section>
              <section className={'w-full'}>
                <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                                placeholder={'Enter your message'}
                                {...field}/>
                          </FormControl>
                        </FormItem>
                    )}
                />
              </section>
              <Button type="submit" className={'mx-auto p-5'}>Send</Button>
            </form>
          </Form>
        </section>
        <Footer/>
      </div>
  );
};

export default Contact;
