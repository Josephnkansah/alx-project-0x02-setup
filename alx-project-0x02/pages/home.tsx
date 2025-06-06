import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Card 1', content: 'This is the first card content.' },
    { title: 'Card 2', content: 'Here is some more information in the second card.' },
    { title: 'Card 3', content: 'Third card with different content.' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page!</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={addPost}
        />
      </main>
    </>
  );
};

export default HomePage;
