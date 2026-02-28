import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '../components/ui/BaseComponents';
import { User, Mail, Briefcase, GraduationCap, Award, Plus, Trash2 } from 'lucide-react';

import { cn } from '../utils/utils';

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills & Awards', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
            <p className="text-gray-500">Manage your professional identity and preferences.</p>
          </div>
          <Button>Save Changes</Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar Tabs */}
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'personal' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-3xl font-bold border-4 border-white shadow-sm">
                      {user?.name?.[0]?.toUpperCase()}
                    </div>
                    <Button variant="secondary" size="sm">Change Photo</Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input label="Full Name" defaultValue={user?.name} />
                    <Input label="Email Address" defaultValue={user?.email} />
                    <Input label="Phone Number" placeholder="+1 (555) 000-0000" />
                    <Input label="Location" placeholder="San Francisco, CA" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Bio</label>
                    <textarea 
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      rows={4}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'education' && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Education History</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus size={18} className="mr-2" /> Add Education
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { school: 'Stanford University', degree: 'MS in Computer Science', year: '2022 - 2024' },
                    { school: 'UC Berkeley', degree: 'BS in Software Engineering', year: '2018 - 2022' }
                  ].map((edu, idx) => (
                    <div key={idx} className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex space-x-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{edu.school}</p>
                          <p className="text-sm text-gray-600">{edu.degree}</p>
                          <p className="text-xs text-gray-400">{edu.year}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === 'experience' && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Work Experience</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus size={18} className="mr-2" /> Add Experience
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { company: 'Google', role: 'Software Engineer Intern', year: 'Summer 2023' },
                    { company: 'Tech Startup', role: 'Full Stack Developer', year: '2021 - 2022' }
                  ].map((exp, idx) => (
                    <div key={idx} className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex space-x-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{exp.role}</p>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                          <p className="text-xs text-gray-400">{exp.year}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === 'skills' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Top Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'UI Design', 'Agile', 'Product Management'].map((skill) => (
                        <span key={skill} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100">
                          {skill}
                          <button className="ml-2 hover:text-indigo-900">×</button>
                        </span>
                      ))}
                      <button className="inline-flex items-center rounded-full border border-dashed border-gray-300 px-3 py-1 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600">
                        + Add Skill
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// End of file
