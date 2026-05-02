import { Link } from 'react-router-dom'

// Landing page — introduces the blog and provides navigation to key sections.
function HomePage() {
  return (
    <div>
      <h1>Welcome to the React Blog</h1>
      <p>
        A simple blog application demonstrating React Router,
        dynamic routing, and protected routes with authentication.
      </p>

      {/* Primary calls to action */}
      <Link to="/blog">Browse Posts</Link>
      {' | '}
      <Link to="/login">Login</Link>
    </div>
  )
}

export default HomePage