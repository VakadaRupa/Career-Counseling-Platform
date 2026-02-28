import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '../components/ui/BaseComponents';
import { Search, MapPin, Briefcase, DollarSign, Clock, Bookmark, ChevronRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Stripe',
    location: 'San Francisco, CA (Hybrid)',
    salary: '$180k - $240k',
    type: 'Full-time',
    posted: '2d ago',
    logo: 'S'
  },
  {
    id: 2,
    title: 'Frontend Engineer (React)',
    company: 'Airbnb',
    location: 'Remote',
    salary: '$150k - $210k',
    type: 'Full-time',
    posted: '5h ago',
    logo: 'A'
  },
  {
    id: 3,
    title: 'UX Researcher',
    company: 'Figma',
    location: 'New York, NY',
    salary: '$140k - $190k',
    type: 'Full-time',
    posted: '1d ago',
    logo: 'F'
  },
  {
    id: 4,
    title: 'Backend Developer (Go)',
    company: 'Uber',
    location: 'Seattle, WA',
    salary: '$160k - $220k',
    type: 'Full-time',
    posted: '3d ago',
    logo: 'U'
  }
];

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Board</h1>
            <p className="text-gray-500">Curated opportunities that match your career goals.</p>
          </div>
          <Button className="flex items-center">
            <Bookmark size={18} className="mr-2" /> Saved Jobs
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Job Type</label>
                  <div className="space-y-2">
                    {['Full-time', 'Contract', 'Internship', 'Freelance'].map((type) => (
                      <label key={type} className="flex items-center space-x-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Salary Range</label>
                  <select className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>$50k - $100k</option>
                    <option>$100k - $150k</option>
                    <option>$150k - $200k</option>
                    <option>$200k+</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input 
                className="pl-10" 
                placeholder="Search by title, company, or keywords..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {jobs.map((job) => (
              <Card key={job.id} className="hover:border-indigo-200 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white font-bold text-xl">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                        <p className="font-medium text-gray-600">{job.company}</p>
                        
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1.5" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign size={16} className="mr-1.5" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1.5" />
                            {job.posted}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                        {job.type}
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                        Details <ChevronRight size={16} className="ml-1" />
                      </Button>
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
