import React from 'react';
import { Card } from './ui/Card';
import { USER_PROFILE, PILLARS } from '../data';
import { User, Activity, AlertCircle, Droplets } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Profilo Dermatologico" className="bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-sky-100 p-3 rounded-full">
              <User className="text-sky-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xl">{USER_PROFILE.title}</h4>
              <p className="text-slate-600">{USER_PROFILE.skinType}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {USER_PROFILE.features.map((feat, idx) => (
              <div key={idx} className="flex justify-between border-b border-slate-100 pb-2 last:border-0">
                <span className="font-medium text-slate-500">{feat.label}</span>
                <span className="text-slate-800 text-right max-w-[60%]">{feat.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Pilastri della Routine">
           <div className="space-y-4">
             {PILLARS.map((pillar, idx) => (
               <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-sky-50 transition-colors">
                  <div className="mt-1">
                    {idx === 0 && <Droplets className="w-5 h-5 text-sky-500" />}
                    {idx === 1 && <Activity className="w-5 h-5 text-sky-500" />}
                    {idx === 2 && <AlertCircle className="w-5 h-5 text-rose-400" />}
                    {idx === 3 && <div className="w-5 h-5 rounded-full border-2 border-sky-500" />}
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">{pillar.title}</h5>
                    <p className="text-sm text-slate-600">{pillar.desc}</p>
                  </div>
               </div>
             ))}
           </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Meccanismi Biologici" subtitle="Pori Dilatati & Punti Neri">
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
              <li>Il sebo accumula dentro il follicolo pilosebaceo.</li>
              <li>L’ossidazione del sebo crea <strong>blackheads</strong> (non è sporco).</li>
              <li>Soluzione Chiave: <strong>BHA (Salicylic Acid)</strong> lipofilo per penetrare il sebo.</li>
              <li>Regolazione: <strong>Niacinamide</strong> per ridurre produzione sebacea.</li>
            </ul>
          </Card>
          <Card title="Focus Invernale" subtitle="Dermatite Perioculare">
             <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 mb-4">
               <h5 className="text-rose-700 font-bold mb-2">Perché succede?</h5>
               <p className="text-sm text-rose-600">Pelle occhi 10x più sottile, scarsa di ghiandole sebacee, sensibile al freddo.</p>
             </div>
             <p className="text-sm font-medium text-slate-700">Soluzione:</p>
             <p className="text-sm text-slate-600">Ceramidi + Centella Asiatica + Panthenol per sigillare la barriera.</p>
          </Card>
      </div>
    </div>
  );
};
