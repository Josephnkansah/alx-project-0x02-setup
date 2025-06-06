# ALX Project: 0x02 - Next.js Dynamic Components

This project demonstrates a modern Next.js application with reusable components, routing, dynamic modals, and data fetching from external APIs.

## 📁 Project Structure
alx-project-0x02/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/
│ └── Header.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── about.tsx
│ ├── home.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/
│ └── assets/
│ └── images/
├── styles/
│ └── globals.css
└── README.md

markdown
Copy
Edit

## 🚀 Features

- **Basic Routing** using Next.js Pages Router (`/home`, `/about`, `/posts`, `/users`)
- **Reusable Components** (`Card`, `Button`, `Header`, `PostModal`, `PostCard`, `UserCard`)
- **Modal Form** for adding dynamic posts
- **API Fetching** from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- **Responsive Layout** with Tailwind CSS

## 🧑‍💻 Technologies

- Next.js
- TypeScript
- React
- Tailwind CSS

## 🔧 Setup and Run

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/alx-project-0x02-setup.git
cd alx-project-0x02
