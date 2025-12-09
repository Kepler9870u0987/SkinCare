import React from 'react';
import { TIMELINE } from '../data';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card } from './ui/Card';
import { TrendingUp, Check } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card title="Proiezione Risultati" subtitle="Basato su 8+ settimane di consistenza">
        <div className="h-[300px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TIMELINE}>
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="period" stroke="#64748b" fontSize={12} tickMargin={10} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area 
                type="monotone" 
                dataKey="progress" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorProgress)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TIMELINE.map((phase, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-sky-100">
               <div className="h-full bg-sky-500" style={{ width: `${phase.progress}%` }} />
             </div>
             <h4 className="font-bold text-slate-800 mt-2">{phase.period}</h4>
             <ul className="mt-3 space-y-2">
               {phase.results.map((res, rIdx) => (
                 <li key={rIdx} className="text-sm text-slate-600 flex items-start leading-tight">
                   <Check className="w-3 h-3 text-sky-500 mr-2 mt-1 flex-shrink-0" />
                   {res}
                 </li>
               ))}
             </ul>
          </div>
        ))}
      </div>

      <Card className="bg-indigo-900 text-white border-none">
        <div className="flex items-start space-x-4">
           <div className="bg-indigo-800 p-3 rounded-full">
             <TrendingUp className="w-6 h-6 text-indigo-200" />
           </div>
           <div>
             <h4 className="font-bold text-lg mb-1">Nota Finale</h4>
             <p className="text-indigo-200 text-sm">
               Se non vedi miglioramenti significativi in 6 settimane, valuta una visita dermatologica 
               per escludere rosacea o dermatite seborroica.
             </p>
           </div>
        </div>
      </Card>
    </div>
  );
};
