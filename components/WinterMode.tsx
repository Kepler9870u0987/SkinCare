import React from 'react';
import { WINTER_ROUTINE } from '../data';
import { Card } from './ui/Card';
import { ThermometerSnowflake, RefreshCcw, XCircle } from 'lucide-react';

export const WinterMode: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-rose-50 border border-rose-100 p-6 rounded-xl flex items-start gap-4">
        <div className="bg-white p-3 rounded-full shadow-sm">
          <ThermometerSnowflake className="w-6 h-6 text-rose-500" />
        </div>
        <div>
           <h3 className="text-lg font-bold text-rose-900">Protocollo Dermatite Invernale</h3>
           <p className="text-rose-700 text-sm mt-1">
             Attivare questo protocollo quando si verificano arrossamenti, prurito o desquamazione nella zona T o perioculare.
           </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Sostituzioni Strategiche">
          <div className="space-y-4">
            {WINTER_ROUTINE.swaps.map((swap, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg relative">
                <div className="absolute top-4 right-4">
                   <RefreshCcw className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Swap {idx + 1}</div>
                <div className="flex flex-col gap-2">
                   <div className="text-slate-500 line-through text-sm">{swap.from}</div>
                   <div className="font-bold text-indigo-700 text-sm">{swap.to}</div>
                </div>
                <p className="text-xs text-slate-500 mt-2 border-t border-slate-200 pt-2 italic">
                  "{swap.why}"
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card title="Cosa Saltare" className="!bg-white">
             <div className="space-y-3">
               {WINTER_ROUTINE.skip.map((item, idx) => (
                 <div key={idx} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                   <XCircle className="w-5 h-5 text-rose-400 mr-3" />
                   {item}
                 </div>
               ))}
             </div>
             <p className="text-xs text-slate-500 mt-4">
               Riprendere gli attivi solo quando il rossore è completamente sparito (7-10 giorni).
             </p>
          </Card>

          <Card title="Timeline Recupero">
             <div className="space-y-4 relative pl-4 border-l border-slate-200">
               <div className="relative">
                 <div className="absolute -left-[21px] top-1 w-3 h-3 bg-rose-400 rounded-full border-2 border-white shadow"></div>
                 <h5 className="text-sm font-bold">Giorno 1-2</h5>
                 <p className="text-xs text-slate-500">Arrossamento cala</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[21px] top-1 w-3 h-3 bg-rose-300 rounded-full border-2 border-white shadow"></div>
                 <h5 className="text-sm font-bold">Giorno 5-7</h5>
                 <p className="text-xs text-slate-500">Prurito diminuisce sensibilmente</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[21px] top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow"></div>
                 <h5 className="text-sm font-bold">Giorno 10-14</h5>
                 <p className="text-xs text-slate-500">Ritorno pelle normale</p>
               </div>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
