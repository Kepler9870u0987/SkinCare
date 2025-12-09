import React, { useState } from 'react';
import { MORNING_ROUTINE, EVENING_ROUTINE, WEEKLY_IMAGES_DATA } from '../data';
import { Card } from './ui/Card';
import { Sun, Moon, Clock, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Routine: React.FC = () => {
  const [mode, setMode] = useState<'morning' | 'evening'>('morning');
  const activeRoutine = mode === 'morning' ? MORNING_ROUTINE : EVENING_ROUTINE;

  // Helper function to calculate end time
  const getEndTime = (startTime: string, duration: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endMinutes = minutes + duration;
    const endHours = hours + Math.floor(endMinutes / 60);
    const remainingMinutes = endMinutes % 60;
    return `${String(endHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Mode Switcher */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-200 p-1.5 rounded-full inline-flex shadow-inner">
          <button
            onClick={() => setMode('morning')}
            className={`px-8 py-3 rounded-full flex items-center space-x-3 transition-all duration-300 ${
              mode === 'morning' 
              ? 'bg-white shadow-md text-sky-600 font-bold scale-105' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Sun className={`w-5 h-5 ${mode === 'morning' ? 'animate-spin-slow' : ''}`} />
            <span>Mattina (10 min)</span>
          </button>
          <button
            onClick={() => setMode('evening')}
            className={`px-8 py-3 rounded-full flex items-center space-x-3 transition-all duration-300 ${
              mode === 'evening' 
              ? 'bg-indigo-600 shadow-md text-white font-bold scale-105' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Moon className={`w-5 h-5 ${mode === 'evening' ? 'animate-pulse' : ''}`} />
            <span>Sera (23 min)</span>
          </button>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-10 pb-12">
        <AnimatePresence mode='wait'>
          {activeRoutine.map((step, idx) => (
            <motion.div
              key={`${mode}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot & Connector */}
              <div className={`absolute -left-[9px] top-6 w-5 h-5 rounded-full border-4 bg-white z-10 ${
                mode === 'morning' ? 'border-sky-500' : 'border-indigo-500'
              }`} />
              
              <div className="flex flex-col gap-2">
                {/* Time Badge */}
                <div className="flex items-center space-x-2 mb-1">
                   <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      mode === 'morning' ? 'bg-sky-100 text-sky-800' : 'bg-indigo-100 text-indigo-800'
                   }`}>
                     {step.time} - {getEndTime(step.time, step.duration)}
                   </span>
                   <span className="text-xs text-slate-400 font-medium flex items-center">
                     <Clock className="w-3 h-3 mr-1" /> {step.duration} min
                   </span>
                </div>
                
                {/* Product Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                   <div className="flex flex-col sm:flex-row">
                      {/* Product Image */}
                      <div className="sm:w-40 h-48 sm:h-auto bg-white flex-shrink-0 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-slate-50 relative">
                        <div className="w-full h-full relative">
                          {step.image ? (
                            <img 
                              src={step.image} 
                              alt={step.product} 
                              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-300">No Img</div>
                          )}
                        </div>
                      </div>

                      <div className="p-6 flex-grow relative">
                         {step.essential && (
                           <div className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-wider shadow-sm animate-pulse">
                             ESSENZIALE
                           </div>
                         )}
                         
                         <h3 className="font-bold text-xl text-slate-800 mb-1">{step.title}</h3>
                         <p className={`${mode === 'morning' ? 'text-sky-600' : 'text-indigo-600'} font-medium text-base mb-6 border-b border-slate-100 pb-4`}>
                           {step.product}
                         </p>
                         
                         <div className="grid md:grid-cols-2 gap-4">
                           <div className="bg-slate-50 p-4 rounded-xl">
                              <strong className="text-slate-900 mb-2 flex items-center text-xs uppercase tracking-wider font-bold">
                                <Clock className="w-3 h-3 mr-2" /> Azione
                              </strong>
                              <p className="text-sm text-slate-700 leading-relaxed">{step.action}</p>
                           </div>
                           <div className={`${mode === 'morning' ? 'bg-sky-50 text-sky-900' : 'bg-indigo-50 text-indigo-900'} p-4 rounded-xl`}>
                              <strong className={`mb-2 flex items-center text-xs uppercase tracking-wider font-bold ${mode === 'morning' ? 'text-sky-700' : 'text-indigo-700'}`}>
                                <Info className="w-3 h-3 mr-2" /> Perché
                              </strong>
                              <p className="text-sm leading-relaxed opacity-90">{step.why}</p>
                           </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Completion Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: activeRoutine.length * 0.1 + 0.2 }}
            className="relative pl-8 md:pl-12 pt-4"
          >
             <div className="absolute -left-[7px] top-10 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow" />
             <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center space-x-4">
               <div className="bg-green-100 p-3 rounded-full">
                 <CheckCircle2 className="w-8 h-8 text-green-600" />
               </div>
               <div>
                 <h4 className="font-bold text-green-900 text-lg">Routine Completata</h4>
                 <p className="text-green-700 text-sm">
                   {mode === 'morning' 
                     ? "Sei pronto per la giornata! Ricorda di riapplicare l'SPF se esci." 
                     : "Buon riposo! Gli attivi lavoreranno durante la notte."}
                 </p>
               </div>
             </div>
          </motion.div>

        </AnimatePresence>
      </div>

      {mode === 'evening' && (
        <div className="mt-12 bg-gradient-to-br from-slate-900 to-indigo-900 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
          
          <h4 className="font-bold text-2xl mb-6 relative z-10">Trattamenti Settimanali (Sera)</h4>
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
             {/* Exfoliation Card */}
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 p-2">
                     <img src={WEEKLY_IMAGES_DATA.cosrxAHA} alt="Exfoliant" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="inline-block bg-indigo-500 text-xs font-bold px-2 py-1 rounded mb-2">2-3x Settimana</span>
                    <h5 className="font-bold text-lg">Esfoliazione Chimica</h5>
                    <p className="text-sm text-indigo-200 mt-1 mb-2">COSRX AHA/BHA Toner</p>
                    <p className="text-xs text-rose-300 font-medium bg-rose-900/30 px-2 py-1 rounded inline-block">
                      ⚠️ No Retinolo stesso giorno
                    </p>
                  </div>
                </div>
             </div>

             {/* Mask Card */}
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 p-2">
                     <img src={WEEKLY_IMAGES_DATA.bojMask} alt="Mask" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="inline-block bg-green-600 text-xs font-bold px-2 py-1 rounded mb-2">Domenica Sera</span>
                    <h5 className="font-bold text-lg">Maschera Calming</h5>
                    <p className="text-sm text-indigo-200 mt-1 mb-2">Beauty of Joseon Centella Mask</p>
                    <p className="text-xs text-green-300 font-medium">Reset barriera cutanea</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};