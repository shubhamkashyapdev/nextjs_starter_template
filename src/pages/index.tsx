import { Button } from '@mantine/core';
import { useEffect } from 'react';

import { Form } from '@/components';
import { Meta } from '@/layouts/Meta';
import useAuthStore from '@/store/authStore';
import { Main } from '@/templates/Main';

const Index = () => {
  const authStore = useAuthStore((state) => state);
  console.log({ authStore });
  useEffect(() => {
    authStore.setUserDetails({ name: 'Sanjeet Mishra' });
  }, []);
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-center font-bold">Next.js Starter</h1>
      <div className="my-8 flex justify-center">
        <div className="flex flex-row space-x-4">
          <Button
            disabled={authStore.authenticated}
            onClick={() => {
              authStore.authenticateUser();
            }}
            className="rounded-sm bg-gray-900 shadow-md"
          >
            Authenticate
          </Button>
          <Button
            disabled={!authStore.authenticated}
            onClick={() => {
              authStore.logoutUser();
            }}
            className="rounded-sm bg-gray-900 shadow-md"
          >
            Logout
          </Button>
        </div>
      </div>
      <Form />
    </Main>
  );
};

export default Index;
