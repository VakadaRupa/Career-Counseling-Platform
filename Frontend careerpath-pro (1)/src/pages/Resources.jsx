import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '../components/ui/BaseComponents';
import { Search, Book, FileText, Video, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'The Ultimate Resume Template 2026',
    category: 'Templates',
    type: 'Document',
    description: 'ATS-friendly resume template designed for modern tech roles.',
    icon: FileText,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'Mastering System Design Interviews',
    category: 'Guides',
    type: 'Video Series',
    description: 'A comprehensive 10-part video series on architectural patterns.',
    icon: Video,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    id: 3,
    title: 'Negotiating Your FAANG Offer',
    category: 'Career Growth',
    type: 'Article',
    description: 'Proven strategies to increase your total compensation package.',
    icon: Book,
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    id: 4,
    title: 'Portfolio for Product Designers',
    category: 'Templates',
    type: 'Case Study',
    description: 'Learn how to structure your design projects for maximum impact.',
    icon: FileText,
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  }
];

import { cn } from '../utils/utils';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Templates', 'Guides', 'Career Growth', 'Workshops'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Resource Library</h1>
          <p className="text-gray-500">Premium content to help you master your craft and grow your career.</p>
        </div>

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search resources..." />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {resources.filter(r => activeCategory === 'All' || r.category === activeCategory).map((res) => (
            <Card key={res.id} className="flex flex-col sm:flex-row">
              <div className={cn('flex h-full w-full items-center justify-center p-8 sm:w-48', res.bg)}>
                <res.icon size={48} className={res.color} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{res.category}</span>
                  <span className="text-xs font-medium text-gray-500">{res.type}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{res.title}</h3>
                <p className="mb-6 flex-1 text-sm text-gray-500">{res.description}</p>
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1">
                    <Download size={16} className="mr-2" /> Download
                  </Button>
                  <Button variant="secondary" size="sm">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

// End of file
