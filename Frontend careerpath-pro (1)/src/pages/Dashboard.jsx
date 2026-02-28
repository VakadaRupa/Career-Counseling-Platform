import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent, Button } from '../components/ui/BaseComponents';
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  MessageSquare,
  ChevronRight,
  Star,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

import { cn } from '../utils/utils';
import CareerPathVisualization from '../components/CareerPathVisualization';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-500">Here's what's happening with your career journey today.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Career Path Visualization */}
            <CareerPathVisualization />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: 'Sessions Completed', value: '12', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Skills Acquired', value: '8', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Job Applications', value: '5', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50' }
              ].map((stat, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={cn('p-3 rounded-lg', stat.bg, stat.color)}>
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Career Growth Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Growth Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Dr. Sarah Jenkins', topic: 'Resume Review', time: 'Tomorrow, 10:00 AM', avatar: 'SJ' },
                  { name: 'Mark Thompson', topic: 'Interview Prep', time: 'Friday, 2:30 PM', avatar: 'MT' }
                ].map((session, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">
                        {session.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{session.topic}</p>
                        <p className="text-sm text-gray-500">with {session.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{session.time}</p>
                      <Button variant="ghost" size="sm" className="text-indigo-600">Join</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <Card className="bg-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Star className="mr-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-indigo-100">Based on your interest in Product Management, we suggest:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-sm bg-white/10 p-2 rounded">
                    <ChevronRight size={16} className="mt-0.5 shrink-0" />
                    <span>Complete "Agile Fundamentals" workshop</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm bg-white/10 p-2 rounded">
                    <ChevronRight size={16} className="mt-0.5 shrink-0" />
                    <span>Connect with Counselor Jane Doe for PM insights</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 border-none">
                  View Full Report
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm" className="flex flex-col h-20 items-center justify-center space-y-1">
                  <Calendar size={20} />
                  <span className="text-xs">Book Session</span>
                </Button>
                <Button variant="secondary" size="sm" className="flex flex-col h-20 items-center justify-center space-y-1">
                  <BookOpen size={20} />
                  <span className="text-xs">Resources</span>
                </Button>
                <Button variant="secondary" size="sm" className="flex flex-col h-20 items-center justify-center space-y-1">
                  <MessageSquare size={20} />
                  <span className="text-xs">Forum</span>
                </Button>
                <Button variant="secondary" size="sm" className="flex flex-col h-20 items-center justify-center space-y-1">
                  <Briefcase size={20} />
                  <span className="text-xs">Jobs</span>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Mastering the STAR Method', type: 'Article', time: '2h ago' },
                  { title: '2026 Tech Salary Guide', type: 'PDF', time: '1d ago' }
                ].map((res, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-gray-900">{res.title}</p>
                      <p className="text-gray-500">{res.type}</p>
                    </div>
                    <span className="text-xs text-gray-400">{res.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// End of file
