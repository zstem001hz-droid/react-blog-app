# React Blog App — Lab 4

## Description
A dynamic blog application built with React and TypeScript demonstrating
client-side routing with React Router, dynamic route parameters, and a
protected admin area using a Context API authentication system.

## Features
- [x] Mock blog post data with slugs and content
- [x] Blog index page listing all posts with links
- [x] Dynamic blog post page using route parameters
- [x] AuthContext managing login and logout state
- [x] Login page with simulated authentication
- [x] Protected admin route redirecting unauthenticated users
- [x] Navbar showing login/logout state conditionally
- [x] 404 Not Found page for unmatched routes

## Tech Stack
- React 19
- TypeScript
- Vite
- React Router DOM

## Project Structure
```
src/
├── components/
│   └── Navbar.tsx               ← navigation with auth-aware links
├── context/
│   └── AuthContext.tsx          ← authentication state and actions
├── lib/
│   └── posts.ts                 ← mock blog post data
├── pages/
│   ├── HomePage.tsx             ← landing page
│   ├── BlogIndexPage.tsx        ← lists all blog posts
│   ├── BlogPostPage.tsx         ← dynamic single post page
│   ├── LoginPage.tsx            ← simulated login page
│   ├── AdminPage.tsx            ← protected admin dashboard
│   └── NotFoundPage.tsx         ← 404 catch-all page
├── App.css                      ← cleared, reserved for styles
├── App.tsx                      ← root component with routing
├── index.css                    ← base reset and font styles
└── main.tsx                     ← React entry point

## Getting Started

```bash
npm install
npm run dev
```

## Deliverables
- All pages implemented with correct routing
- Dynamic blog post page using slug parameters
- AuthContext with login and logout functionality
- Protected admin route with redirect
- GitHub repository link submitted via Canvas

## References

### React
- [useState — React Docs](https://react.dev/reference/react/useState)
- [useContext — React Docs](https://react.dev/reference/react/useContext)
- [createContext — React Docs](https://react.dev/reference/react/createContext)

### React Router
- [React Router Documentation](https://reactrouter.com/)
- [BrowserRouter — React Router](https://reactrouter.com/en/main/router-components/browser-router)
- [Routes and Route — React Router](https://reactrouter.com/en/main/components/routes)
- [Link — React Router](https://reactrouter.com/en/main/components/link)
- [NavLink — React Router](https://reactrouter.com/en/main/components/nav-link)
- [useNavigate — React Router](https://reactrouter.com/en/main/hooks/use-navigate)
- [useParams — React Router](https://reactrouter.com/en/main/hooks/use-params)
- [Navigate — React Router](https://reactrouter.com/en/main/components/navigate)

### TypeScript
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Array.prototype.find — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Template literals — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Git
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Tools
- [Vite Documentation](https://vitejs.dev/guide/)

## Reflections

This Lab introduced React Router as the foundation for building navigable single page applications. The most important concept was understanding that client-side routing doesn't reload the page — React Router intercepts navigation events and swaps components in and out while the browser URL updates to reflect the current view.

Dynamic routing with `useParams` was the most technically interesting feature. The slug-based URL pattern — where `/blog/react-router-basics `extracts `react-router-basics` as a parameter and uses it to find the correct post from the mock data — demonstrated how URLs can carry meaningful data that drives what a component renders.

The protected admin route using `<Navigate>` for redirection connected directly to prior professional experience with identity and access management. Having worked extensively with authentication systems, SSO implementations, and access control in enterprise environments, the logic behind `isAuthenticated` checks, login flows, and protected route redirection felt immediately intuitive. That familiarity made it straightforward to reason through the AuthContext design — what state needed to be global, what actions needed to be exposed, and how the redirect behavior should work when an unauthenticated user attempts to access a protected resource. The implementation came together quickly as a result.

The `AuthContext` pattern in this lab is a simplified version of what production authentication systems do at a much larger scale — manage session state globally, expose it to the component tree, and gate access to protected areas based on that state.