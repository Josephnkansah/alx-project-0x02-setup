import { GetStaticProps } from 'next';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Users</h1>
        <p className="mb-8 text-gray-600">Meet our community of {users.length} users</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
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
      revalidate: 60, // Incremental Static Regeneration (update every 60 seconds)
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default UsersPage;
