import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to ALX Project Home</h1>
      <p className="text-lg mb-6">Navigate through the app:</p>
      <div className="space-x-4">
        <Link href="/home" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/posts" className="text-blue-600 hover:underline">Posts</Link>
        <Link href="/users" className="text-blue-600 hover:underline">Users</Link>
      </div>
    </div>
  );
};

export default Home;