import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '../components/ui/BaseComponents';
import { Search, Filter, Star, Calendar, Clock, MapPin, Video } from 'lucide-react';

const counselors = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    title: 'Senior Career Coach',
    expertise: ['Tech Careers', 'Resume Optimization', 'Interview Prep'],
    rating: 4.9,
    reviews: 124,
    price: '$80/hr',
    location: 'Remote / SF',
    image: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: 2,
    name: 'Mark Thompson',
    title: 'Executive Recruiter',
    expertise: ['Leadership', 'Negotiation', 'Career Pivot'],
    rating: 4.8,
    reviews: 89,
    price: '$120/hr',
    location: 'Remote / NYC',
    image: 'https://picsum.photos/seed/mark/200/200'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    title: 'Product Management Expert',
    expertise: ['Product Management', 'Portfolio Review', 'FAANG Prep'],
    rating: 5.0,
    reviews: 56,
    price: '$100/hr',
    location: 'Remote',
    image: 'https://picsum.photos/seed/elena/200/200'
  }
];

export default function Counseling() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Find Your Perfect Counselor</h1>
          <p className="text-gray-500">Connect with experts who can help you navigate your professional journey.</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input 
              className="pl-10" 
              placeholder="Search by name, expertise, or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="secondary" className="flex items-center">
            <Filter className="mr-2 h-5 w-5" /> Filters
          </Button>
        </div>

        {/* Counselor Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {counselors.map((counselor) => (
            <Card key={counselor.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={counselor.image} 
                      alt={counselor.name} 
                      className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{counselor.name}</h3>
                      <p className="text-sm text-gray-500">{counselor.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1 text-sm font-bold">{counselor.rating}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {counselor.expertise.map((exp) => (
                      <span key={exp} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {exp}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    {counselor.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Video size={16} className="mr-2" />
                    Video Session Available
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 bg-gray-50 p-4 flex items-center justify-between">
                <span className="font-bold text-gray-900">{counselor.price}</span>
                <Button size="sm">Book Session</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
