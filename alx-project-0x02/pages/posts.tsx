import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

// ✅ getStaticProps with async/await for static generation
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
