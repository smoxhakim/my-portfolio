import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: 'building-scalable-react-applications',
    title: 'Building Scalable React Applications',
    date: '2025-01-01',
    readTime: '5 min read',
    excerpt: 'Learn best practices for building maintainable and scalable React applications with modern tools and techniques.',
    tags: ['React', 'Architecture', 'Performance'],
    featured: true,
    image: '/api/placeholder/800/400'
  },
  {
    slug: 'understanding-typescript-generics',
    title: 'Understanding TypeScript Generics',
    date: '2025-01-15',
    readTime: '4 min read',
    excerpt: 'A comprehensive guide to understanding and implementing TypeScript generics in your projects.',
    tags: ['TypeScript', 'Development'],
    featured: false,
    image: '/api/placeholder/800/400'
  },
  {
    slug: 'mastering-css-grid-layout',
    title: 'Mastering CSS Grid Layout',
    date: '2025-02-01',
    readTime: '6 min read',
    excerpt: 'Deep dive into CSS Grid Layout and learn how to create complex layouts with ease.',
    tags: ['CSS', 'Web Design', 'Layout'],
    featured: false,
    image: '/api/placeholder/800/400'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section className="section-container">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Explore the latest insights and discoveries in web development
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between bg-[rgb(var(--color-subtle))] p-6 rounded-2xl"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-muted))]" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-12 w-full bg-[rgb(var(--color-card))]"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-[rgb(var(--color-muted))]" />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="input bg-[rgb(var(--color-card))] w-48"
          >
            <option value="">All Topics</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Featured Post Section */}
      {filteredPosts.find(post => post.featured) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="card hover-card">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/api/placeholder/800/600"
                  alt="Featured post"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="badge bg-[rgb(var(--color-accent-3))] text-white">Featured</span>
                  <h3 className="text-2xl font-bold">{filteredPosts.find(post => post.featured).title}</h3>
                  <p className="text-[rgb(var(--color-muted))]">{filteredPosts.find(post => post.featured).excerpt}</p>
                </div>
                <div className="mt-6">
                  <Link 
                    to={`/blog/${filteredPosts.find(post => post.featured).slug}`} 
                    className="btn btn-primary"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.filter(post => !post.featured).map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card hover-card group"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="badge bg-[rgb(var(--color-card))] backdrop-blur-md bg-opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-[rgb(var(--color-primary-600))] transition-colors">
                {post.title}
              </h3>

              <p className="text-[rgb(var(--color-muted))]">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-[rgb(var(--color-muted))]">
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

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-[rgb(var(--color-primary-600))] font-medium hover:gap-3 transition-all"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;