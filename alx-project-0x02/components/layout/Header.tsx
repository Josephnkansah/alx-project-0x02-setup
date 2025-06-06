import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex gap-6 px-4">
        <Link href="/home" className="hover:text-blue-300">Home</Link>
        <Link href="/about" className="hover:text-blue-300">About</Link>
        <Link href="/posts" className="hover:text-blue-300">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;