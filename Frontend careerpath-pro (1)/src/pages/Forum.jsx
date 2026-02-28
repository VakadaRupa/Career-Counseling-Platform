import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '../components/ui/BaseComponents';
import { MessageSquare, ThumbsUp, MessageCircle, Search, Plus, TrendingUp } from 'lucide-react';

const threads = [
  {
    id: 1,
    title: 'How to transition from Engineering to Product Management?',
    author: 'Alex Chen',
    category: 'Career Pivot',
    replies: 24,
    likes: 56,
    time: '3h ago'
  },
  {
    id: 2,
    title: 'What are the most in-demand skills for 2026?',
    author: 'Sarah J.',
    category: 'Industry Trends',
    replies: 42,
    likes: 128,
    time: '5h ago'
  },
  {
    id: 3,
    title: 'Negotiating remote work benefits in a hybrid world',
    author: 'Mike Ross',
    category: 'Negotiation',
    replies: 15,
    likes: 34,
    time: '1d ago'
  }
];

import { cn } from '../utils/utils';

export default function Forum() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Community Forum</h1>
            <p className="text-gray-500">Connect, share, and learn from fellow professionals.</p>
          </div>
          <Button className="flex items-center">
            <Plus size={18} className="mr-2" /> New Discussion
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {['All', 'Career Pivot', 'Interview Prep', 'Negotiation', 'Industry Trends', 'Networking'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      activeCategory === cat 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
              <CardContent className="p-6">
                <TrendingUp className="mb-4 h-8 w-8 text-indigo-200" />
                <h3 className="mb-2 font-bold">Trending Topics</h3>
                <p className="text-xs text-indigo-100 mb-4">Join the most active discussions in the community.</p>
                <ul className="space-y-2 text-sm">
                  <li className="hover:underline cursor-pointer">#AIJobs2026</li>
                  <li className="hover:underline cursor-pointer">#RemoteWorkLife</li>
                  <li className="hover:underline cursor-pointer">#SalaryTransparency</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Thread List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input className="pl-10" placeholder="Search discussions..." />
            </div>

            {threads.map((thread) => (
              <Card key={thread.id} className="hover:border-indigo-200 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{thread.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors">{thread.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {thread.author}</span>
                        <span>•</span>
                        <span>{thread.time}</span>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <ThumbsUp size={18} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">{thread.likes}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <MessageCircle size={18} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">{thread.replies}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// End of file
