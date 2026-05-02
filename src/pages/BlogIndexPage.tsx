import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

// Displays a list of all available blog posts.
// Each post title links to its dynamic detail page using its slug.
function BlogIndexPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          // Link navigates to /blog/:slug using each post's unique slug
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogIndexPage