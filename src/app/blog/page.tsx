'use client';

import React, { useState } from 'react';
import { useFarm } from '@/context/FarmContext';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  icon: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Best Practices for Dairy Cow Management',
    category: 'Dairy',
    date: '2026-01-15',
    excerpt: 'Learn the essential practices for maintaining healthy and productive dairy cows throughout the year.',
    icon: '🐄'
  },
  {
    id: '2',
    title: 'Goat Farming for Beginners',
    category: 'Goat Farming',
    date: '2026-01-10',
    excerpt: 'A comprehensive guide to starting your goat farming business with practical tips and advice.',
    icon: '🐐'
  },
  {
    id: '3',
    title: 'Nutrition and Feeding Guide for Livestock',
    category: 'Nutrition',
    date: '2026-01-05',
    excerpt: 'Understand the nutritional requirements of different livestock and optimize your feed management.',
    icon: '🍽️'
  },
  {
    id: '4',
    title: 'Disease Prevention in Poultry Farming',
    category: 'Health',
    date: '2025-12-28',
    excerpt: 'Effective strategies to prevent common diseases in poultry and maintain a healthy flock.',
    icon: '🐔'
  },
  {
    id: '5',
    title: 'Sustainable Farming Practices',
    category: 'Sustainability',
    date: '2025-12-20',
    excerpt: 'Adopt eco-friendly farming methods for better environmental impact and long-term sustainability.',
    icon: '🌱'
  },
  {
    id: '6',
    title: 'Breeding Selection and Genetics',
    category: 'Breeding',
    date: '2025-12-15',
    excerpt: 'Master the science of selective breeding to improve livestock productivity and quality.',
    icon: '📈'
  },
];

export default function BlogPage() {
  const { educational } = useFarm();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Farming Blog & Resources 📖</h1>
          <p className="text-xl">Expert tips, guides, and insights for successful animal farming</p>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-green-800">📚 Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {educational.map(item => {
              const icon = item.type === 'video' ? '🎥' : item.type === 'book' ? '📖' : '📄';
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-2">
                        {item.type}
                      </span>
                      <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.duration && <p className="text-sm text-gray-500">⏱️ Duration: {item.duration}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-green-800">Latest Blog Posts</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">{post.icon}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-700">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm text-gray-500">📅 {new Date(post.date).toLocaleDateString()}</span>
                    <button className="text-green-700 font-bold hover:text-green-900">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-700 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for farming tips and updates</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-800 placeholder-gray-500"
            />
            <button className="bg-yellow-400 text-green-800 px-8 py-3 rounded font-bold hover:bg-yellow-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
