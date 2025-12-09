import React, { useState } from 'react';
import { Card } from './ui/Card';
import { ChevronDown, Droplets, AlertTriangle } from 'lucide-react';

const FAQ = [
  {
    question: "La pelle diventa secca o tira",
    icon: <Droplets className="w-5 h-5 text-sky-500" />,
    steps: [
      "Aumenta strati idratazione: Applica Isntree Toner 2x invece di 1x.",
      "Sostituisci crema: Usa Aestura Atobarrier (più ricca).",
      "Riduci esfoliazione: Se usi BHA 3x/sett, scendi a 1-2x.",
      "Layering: Aggiungi Snail Mucin prima del siero."
    ]
  },
  {
    question: "La pelle è arrossata o irritata",
    icon: <AlertTriangle className="w-5 h-5 text-rose-500" />,
    steps: [
      "SKIP immediato COSRX AHA/BHA Toner.",
      "Semplifica: Solo Doppia Detersione + Snail + Purito (no niacinamide).",
      "Aggiungi Pyunkang Yul Essence Toner (astragalus).",
      "Usa SKIN1004 Eye Cream anche sulle zone rosse del viso."
    ]
  }
];

export const Troubleshooting: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Troubleshooting Rapido</h2>
        <p className="text-slate-500">Soluzioni immediate per problemi comuni</p>
      </div>

      <div className="space-y-4">
        {FAQ.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-semibold text-slate-800">{item.question}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 bg-slate-50 border-t border-slate-100">
                <ol className="list-decimal list-inside space-y-2 text-slate-700 mt-4">
                  {item.steps.map((step, sIdx) => (
                    <li key={sIdx} className="pl-2 py-1">
                      <span className="ml-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
