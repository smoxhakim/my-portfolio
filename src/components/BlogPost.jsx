import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const blogData = {
  'building-scalable-react-applications': {
    title: 'Building Scalable React Applications',
    date: '2025-01-01',
    readTime: '5 min read',
    excerpt: 'Learn best practices for building maintainable and scalable React applications with modern tools and techniques.',
    content: `
      <h2>Introduction</h2>
      <p>Building scalable React applications requires careful consideration of architecture, state management, and performance optimization. In this article, we'll explore best practices and modern techniques that will help you create maintainable and efficient React applications.</p>
      
      <h2>Key Principles</h2>
      <p>When building scalable React applications, there are several key principles to keep in mind:</p>
      <ul>
        <li>Component composition</li>
        <li>State management</li>
        <li>Code splitting</li>
        <li>Performance optimization</li>
      </ul>

      <h2>Component Architecture</h2>
      <p>A well-structured component architecture is crucial for maintaining scalability. Consider implementing:</p>
      <ul>
        <li>Atomic design principles</li>
        <li>Smart and presentational components</li>
        <li>Custom hooks for reusable logic</li>
      </ul>

      <h2>State Management Strategies</h2>
      <p>Choose the right state management solution based on your needs:</p>
      <ul>
        <li>Local state with useState</li>
        <li>Context API for global state</li>
        <li>Redux for complex state management</li>
      </ul>

      <h2>Conclusion</h2>
      <p>By following these principles and practices, you can build React applications that scale effectively and remain maintainable as they grow.</p>
    `,
    tags: ['React', 'Architecture', 'Performance'],
    image: '/api/placeholder/800/400'
  },
  'understanding-typescript-generics': {
    title: 'Understanding TypeScript Generics',
    date: '2025-01-15',
    readTime: '4 min read',
    excerpt: 'A comprehensive guide to understanding and implementing TypeScript generics in your projects.',
    content: `
      <h2>Introduction to TypeScript Generics</h2>
      <p>TypeScript generics provide a way to create reusable components that can work with multiple types rather than a single type. This powerful feature enables type-safe and flexible programming.</p>

      <h2>Basic Generic Syntax</h2>
      <p>Understanding the basic syntax of generics is the first step to mastering them:</p>
      <pre><code>
function identity<T>(arg: T): T {
    return arg;
}
      </code></pre>

      <h2>Common Use Cases</h2>
      <p>Generics are commonly used in several scenarios:</p>
      <ul>
        <li>Generic functions</li>
        <li>Generic interfaces</li>
        <li>Generic classes</li>
        <li>Generic constraints</li>
      </ul>

      <h2>Best Practices</h2>
      <p>When working with generics, consider these best practices:</p>
      <ul>
        <li>Use meaningful type parameter names</li>
        <li>Apply constraints when necessary</li>
        <li>Avoid over-genericizing</li>
      </ul>
    `,
    tags: ['TypeScript', 'Development'],
    image: '/api/placeholder/800/400'
  },
  'mastering-css-grid-layout': {
    title: 'Mastering CSS Grid Layout',
    date: '2025-02-01',
    readTime: '6 min read',
    excerpt: 'Deep dive into CSS Grid Layout and learn how to create complex layouts with ease.',
    content: `
      <h2>Introduction to CSS Grid</h2>
      <p>CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. It provides a systematic approach to arranging content in rows and columns.</p>

      <h2>Grid Fundamentals</h2>
      <p>Understanding these fundamental concepts is crucial:</p>
      <ul>
        <li>Grid containers and items</li>
        <li>Grid lines and tracks</li>
        <li>Grid areas and cells</li>
      </ul>

      <h2>Common Grid Patterns</h2>
      <p>Here are some common layout patterns you can achieve with CSS Grid:</p>
      <ul>
        <li>Holy Grail Layout</li>
        <li>Card Grid</li>
        <li>Magazine Layout</li>
        <li>Responsive Grid</li>
      </ul>

      <h2>Advanced Techniques</h2>
      <p>Take your layouts to the next level with these advanced techniques:</p>
      <ul>
        <li>Auto-fit and auto-fill</li>
        <li>Minmax function</li>
        <li>Grid template areas</li>
      </ul>
    `,
    tags: ['CSS', 'Web Design', 'Layout'],
    image: '/api/placeholder/800/400'
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Post Not Found</h2>
          <p className="section-subtitle">The requested blog post could not be found.</p>
          <a href="/blog" className="btn btn-primary mt-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <article className="section-container max-w-4xl mx-auto">
      <div className="mb-8">
        <a href="/blog" className="btn btn-secondary mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </a>
        
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="badge">
                <Tag className="w-4 h-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold">{post.title}</h1>

          <div className="flex items-center gap-4 text-[rgb(var(--color-muted))]">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div 
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPost;