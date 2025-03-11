'use client';

import React from 'react';
import { useTranslation } from '@/contexts/translation-context';

import { Dictionary } from '@/types/i18n';

interface Blog {
  title: string;
  description: string;
  link: string;
}

const BLOG_SLUGS = [
  { slug: 'adhesive-wheel-weights-production', key: 'adhesive-wheel-weights-production' }
] as const;

const BlogList: React.FC = () => {
  const { t } = useTranslation();

  const blogs: Blog[] = BLOG_SLUGS.map(({ slug, key }) => {
    return {
      title: t(`blogs.${key}.blogListTitle`) || 'No Title',
      description: t(`blogs.${key}.blogListDescription`) || 'No Description',
      link: `/blogs/${slug}`,
    };
  });

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <a key={index} href={blog.link} className="block bg-white rounded-lg shadow-md p-5 hover:cursor-pointer transition-all duration-200 hover:scale-105 transform hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-700 text-justify">{blog.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
