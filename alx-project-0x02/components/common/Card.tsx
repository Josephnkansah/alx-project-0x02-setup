import React from 'react';
import { type CardProps } from '@/interfaces'; // ✅ Use path alias and type import

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm mx-auto my-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
