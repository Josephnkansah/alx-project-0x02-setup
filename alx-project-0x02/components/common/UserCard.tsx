// components/common/UserCard.tsx
import { UserProps } from '../../interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Phone:</span> {user.phone}
      </p>
      <div className="mt-3 p-3 bg-gray-50 rounded">
        <h4 className="font-medium mb-1">Address</h4>
        <p className="text-sm">{user.address.street}, {user.address.suite}</p>
        <p className="text-sm">{user.address.city}, {user.address.zipcode}</p>
      </div>
      <div className="mt-3">
        <h4 className="font-medium">Company</h4>
        <p className="text-sm">{user.company.name}</p>
        <p className="text-sm italic text-gray-500">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
