// Defines the shape of a single blog post
export interface Post {
  id: number
  slug: string
  title: string
  content: string
}

// Mock blog post data — simulates a database or API response.
// Slug: a URL-friendly string used as the dynamic route parameter.
export const posts: Post[] = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.',
  },
  {
    id: 2,
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks',
    content: 'Hooks are functions that let you hook into React state and lifecycle features from function components. useState and useEffect are the most commonly used hooks.',
  },
  {
    id: 3,
    slug: 'context-api-explained',
    title: 'Context API Explained',
    content: 'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level, solving the prop drilling problem.',
  },
  {
    id: 4,
    slug: 'react-router-basics',
    title: 'React Router Basics',
    content: 'React Router enables client-side routing in React applications, allowing you to build single page applications with navigation that feels like a multi-page experience.',
  },
  {
    id: 5,
    slug: 'typescript-with-react',
    title: 'TypeScript with React',
    content: 'TypeScript adds static typing to JavaScript, making your React components more predictable and easier to debug by catching type errors at compile time.',
  },
]