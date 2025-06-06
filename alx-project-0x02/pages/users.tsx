import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (isStarting: boolean) => setIsLoading(isStarting);
    
    router.events.on('routeChangeStart', () => handleRouteChange(true));
    router.events.on('routeChangeComplete', () => handleRouteChange(false));
    router.events.on('routeChangeError', () => handleRouteChange(false));

    return () => {
      router.events.off('routeChangeStart', () => handleRouteChange(true));
      router.events.off('routeChangeComplete', () => handleRouteChange(false));
      router.events.off('routeChangeError', () => handleRouteChange(false));
    };
  }, [router]);

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  if (!users.length) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Users</h1>
          <p>No users found</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const users: UserProps[] = await res.json();
    return {
      props: {
        users,
      },
      revalidate: 60, // ISR: regenerate page every 60 seconds
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        users: [],
      },
      revalidate: 60,
    };
  }
};

export default UsersPage;
