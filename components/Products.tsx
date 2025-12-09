import React, { useState } from 'react';
import { BUDGETS } from '../data';
import { CheckCircle, ShoppingCart, AlertTriangle, Tag } from 'lucide-react';
import { Card } from './ui/Card';

export const Products: React.FC = () => {
  const [activeTier, setActiveTier] = useState(1); // Default to Medium (index 1)

  return (
    <div className="space-y-8">
      {/* Tier Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-xl">
        {BUDGETS.map((tier, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTier(idx)}
            className={`py-3 px-2 rounded-lg text-sm md:text-base font-medium transition-all text-center flex flex-col items-center justify-center ${
              activeTier === idx 
              ? 'bg-white shadow-sm text-sky-700 ring-1 ring-black/5' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span>{tier.name}</span>
            <span className="text-xs opacity-70 mt-1">{tier.range}</span>
            {tier.recommended && (
              <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full mt-1">
                CONSIGLIATO
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Tier Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
           <Card className="!bg-sky-50 border-sky-100">
             <h3 className="text-sky-900 font-bold text-lg mb-2">Concept</h3>
             <p className="text-sky-800">{BUDGETS[activeTier].concept}</p>
           </Card>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {BUDGETS[activeTier].products.map((prod, pIdx) => (
               <div key={pIdx} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-start space-x-4 hover:border-sky-200 transition-colors group">
                 <div className="w-16 h-16 flex-shrink-0 bg-slate-50 rounded-lg overflow-hidden border border-slate-100">
                   {prod.image ? (
                     <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-contain mix-blend-multiply p-1 group-hover:scale-105 transition-transform" 
                     />
                   ) : (
                     <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">IMG</div>
                   )}
                 </div>
                 <div className="flex-grow">
                   <h5 className="font-bold text-slate-800 text-sm leading-tight mb-1">{prod.name}</h5>
                   <div className="flex items-center text-slate-500 text-sm">
                     <Tag className="w-3 h-3 mr-1" />
                     {prod.price}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="space-y-6">
          <Card title="Vantaggi" className="h-fit">
            <ul className="space-y-3">
              {BUDGETS[activeTier].pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </Card>
          
          {BUDGETS[activeTier].cons && (
             <Card title="Limitazioni" className="h-fit">
              <ul className="space-y-3">
                {BUDGETS[activeTier].cons?.map((con, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <div className="bg-slate-800 text-white rounded-xl p-6">
            <h4 className="font-bold mb-4 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" /> Dove Comprare
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span>YesStyle / Stylevana</span>
                <span className="text-slate-400">Prezzi bassi, spedizione lenta</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span>MoosySkin / Makeup.it</span>
                <span className="text-slate-400">Italia, veloce</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sephora / Douglas</span>
                <span className="text-slate-400">Solo alcuni brand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};