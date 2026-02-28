import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui/BaseComponents';
import { Briefcase } from 'lucide-react';

import { cn } from '../utils/utils';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup
    signup({ name, email, role });
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Briefcase size={28} />
          </div>
          <CardTitle>Create an Account</CardTitle>
          <p className="text-sm text-gray-500">Join CareerPath Pro to accelerate your growth</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">I am a...</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('user')}
                  className={cn(
                    'flex flex-col items-center justify-center rounded-lg border p-4 transition-all',
                    role === 'user' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 hover:border-gray-300'
                  )}
                >
                  <span className="font-semibold">User</span>
                  <span className="text-xs opacity-70">Seeking guidance</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('counselor')}
                  className={cn(
                    'flex flex-col items-center justify-center rounded-lg border p-4 transition-all',
                    role === 'counselor' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 hover:border-gray-300'
                  )}
                >
                  <span className="font-semibold">Counselor</span>
                  <span className="text-xs opacity-70">Offering expertise</span>
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Already have an account? </span>
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// End of file
