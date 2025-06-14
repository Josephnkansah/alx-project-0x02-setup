import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
