export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  label: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost'; // Added common variants
  disabled?: boolean;
}

// Card component props
export interface CardProps {
  title: string;
  content: string;
  footer?: React.ReactNode; // Optional footer content
  className?: string; // Additional Tailwind classes
}

// User address as separate interface for reusability
export interface UserAddress {
  street: string;
  city: string;
  zipcode: string;
  geo?: { // Optional geolocation
    lat: string;
    lng: string;
  };
}

// Complete user properties
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase?: string;
  };
}

// Post properties with author reference
export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
  author?: Pick<UserProps, 'id' | 'name'>; // Optional embedded author info
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
