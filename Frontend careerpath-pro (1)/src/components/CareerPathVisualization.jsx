import React, { useState, useEffect } from 'react';
import { getCareerPathVisualizationData } from '../services/geminiService';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from './ui/BaseComponents';
import { Search, TrendingUp, ArrowRight, DollarSign, Clock } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '../utils/utils';

export default function CareerPathVisualization() {
  const [goal, setGoal] = useState('Senior Product Manager');
  const [pathData, setPathData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPath = async () => {
    setLoading(true);
    const data = await getCareerPathVisualizationData(goal);
    if (data) setPathData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPath();
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Career Path Roadmap</span>
          <div className="flex space-x-2">
            <Input 
              className="w-64 h-9" 
              placeholder="Enter career goal..." 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <Button size="sm" onClick={fetchPath} disabled={loading}>
              {loading ? 'Generating...' : 'Visualize'}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-100 md:left-1/2 md:-ml-px"></div>

          <div className="space-y-12">
            {pathData.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Dot */}
                <div className="absolute left-8 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-white md:left-1/2"></div>

                {/* Content Card */}
                <div className={cn(
                  "ml-16 w-full md:ml-0 md:w-[45%] p-4 rounded-xl border border-gray-100 bg-white shadow-sm group-hover:border-indigo-200 transition-colors",
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{stage.Title || stage.title}</h4>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                      {stage.Years || stage.years || stage.experience}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{stage.Responsibilities || stage.responsibilities}</p>
                  <div className="flex items-center text-sm font-semibold text-gray-900">
                    <DollarSign size={14} className="mr-1 text-green-600" />
                    {stage.Salary || stage.salary || stage.average_salary}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// End of file
