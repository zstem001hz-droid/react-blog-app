import { useParams, Link } from 'react-router-dom'
import { posts } from '../lib/posts'

// Renders a single blog post matched by slug from the URL parameter.
// Displays a not found message if no post matches the slug.
function BlogPostPage() {

  // Extracts the slug parameter from the current URL
  const { slug } = useParams()

  // Finds the post whose slug matches the URL parameter
  const post = posts.find(p => p.slug === slug)

  // Handles the case where no post matches the slug
  if (!post) {
    return (
      <div>
        <h2>Webpage not found: 🙈 Go back to Blog Page</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  )
}

export default BlogPostPage