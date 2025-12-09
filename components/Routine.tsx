import React, { useState } from 'react';
import { MORNING_ROUTINE, EVENING_ROUTINE } from '../data';
import { Card } from './ui/Card';
import { Sun, Moon, Clock, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Routine: React.FC = () => {
  const [mode, setMode] = useState<'morning' | 'evening'>('morning');
  const activeRoutine = mode === 'morning' ? MORNING_ROUTINE : EVENING_ROUTINE;

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1 rounded-full inline-flex">
          <button
            onClick={() => setMode('morning')}
            className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all ${
              mode === 'morning' ? 'bg-white shadow-sm text-sky-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Mattina (10 min)</span>
          </button>
          <button
            onClick={() => setMode('evening')}
            className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all ${
              mode === 'evening' ? 'bg-indigo-600 shadow-sm text-white font-bold' : 'text-slate-500'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Sera (20 min)</span>
          </button>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8">
        <AnimatePresence mode='wait'>
          {activeRoutine.map((step, idx) => (
            <motion.div
              key={`${mode}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                mode === 'morning' ? 'bg-sky-100 border-sky-500' : 'bg-indigo-100 border-indigo-500'
              }`} />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 flex-shrink-0 pt-1">
                  <span className={`text-sm font-bold px-2 py-1 rounded ${
                     mode === 'morning' ? 'bg-sky-50 text-sky-700' : 'bg-indigo-50 text-indigo-700'
                  }`}>
                    {step.time}
                  </span>
                </div>
                
                <Card className="flex-grow !p-0 overflow-hidden group">
                   <div className="flex flex-col sm:flex-row">
                      {/* Product Image Section */}
                      <div className="sm:w-32 h-32 sm:h-auto bg-slate-50 flex-shrink-0 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-slate-100">
                        {step.image ? (
                          <img 
                            src={step.image} 
                            alt={step.product} 
                            className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-slate-200" />
                        )}
                      </div>

                      <div className="p-5 flex-grow relative">
                         {step.essential && (
                           <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold tracking-wider">
                             ESSENZIALE
                           </div>
                         )}
                         <h3 className="font-bold text-lg text-slate-800 mb-1">{step.title}</h3>
                         <p className="text-sky-600 font-medium text-sm mb-4">{step.product}</p>
                         
                         <div className="grid md:grid-cols-2 gap-4">
                           <div className="bg-slate-50 p-3 rounded text-sm text-slate-700">
                              <strong className="block text-slate-900 mb-1 flex items-center text-xs uppercase tracking-wide">
                                <Clock className="w-3 h-3 mr-1" /> Azione
                              </strong>
                              {step.action}
                           </div>
                           <div className="bg-sky-50 p-3 rounded text-sm text-sky-900">
                              <strong className="block text-sky-700 mb-1 flex items-center text-xs uppercase tracking-wide">
                                <Info className="w-3 h-3 mr-1" /> Perché
                              </strong>
                              {step.why}
                           </div>
                         </div>
                      </div>
                   </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {mode === 'evening' && (
        <div className="mt-12 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-4">Trattamenti Settimanali (Sera)</h4>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-4">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden">
                   {/* Placeholder for COSRX AHA */}
                   <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=200" alt="Exfoliant" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">2-3x Settimana</span>
                  <h5 className="font-bold text-slate-800">Esfoliazione Chimica</h5>
                  <p className="text-sm text-slate-600 mt-1">COSRX AHA/BHA Toner</p>
                  <p className="text-xs text-rose-500 mt-2 font-medium">Non combinare con Retinolo nello stesso giorno.</p>
                </div>
             </div>
             <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-4">
                 <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden">
                   {/* Placeholder for Mask */}
                   <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=200" alt="Mask" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Domenica Sera</span>
                  <h5 className="font-bold text-slate-800">Maschera Calming</h5>
                  <p className="text-sm text-slate-600 mt-1">Beauty of Joseon Centella Mask</p>
                  <p className="text-xs text-sky-500 mt-2 font-medium">Prepara la pelle per la settimana.</p>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};