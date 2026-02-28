import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/BaseComponents';
import { CheckCircle, Users, Target, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Design Your Future</span>
                <span className="block text-indigo-600">With Expert Guidance</span>
              </h1>
              <p className="mt-6 text-lg text-gray-500 sm:text-xl">
                Connect with world-class career counselors, access premium resources, and use AI-powered insights to navigate your professional journey.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Explore Resources
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500 sm:justify-center lg:justify-start">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>100+ Expert Counselors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>AI Recommendations</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center"
            >
              <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden">
                <img
                  className="w-full object-cover"
                  src="https://picsum.photos/seed/career/800/600"
                  alt="Career Counseling Session"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to succeed</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Our platform combines human expertise with cutting-edge technology to provide a comprehensive career growth ecosystem.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: 'Expert Counseling', desc: 'Book 1-on-1 sessions with industry veterans and certified coaches.' },
              { icon: Target, title: 'AI Career Path', desc: 'Get personalized career recommendations based on your skills and goals.' },
              { icon: Rocket, title: 'Job Board', desc: 'Access exclusive job opportunities matched to your profile.' },
              { icon: CheckCircle, title: 'Resource Library', desc: 'Premium templates, guides, and workshops for every career stage.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to take the next step?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Join thousands of professionals who have transformed their careers with CareerPath Pro.
          </p>
          <div className="mt-10">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>© 2026 CareerPath Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
