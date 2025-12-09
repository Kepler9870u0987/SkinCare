import React, { useState } from 'react';
import { LayoutDashboard, Clock, ShoppingBag, BarChart2, Snowflake, HelpCircle } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Routine } from './components/Routine';
import { Products } from './components/Products';
import { Timeline } from './components/Timeline';
import { WinterMode } from './components/WinterMode';
import { Troubleshooting } from './components/Troubleshooting';

const TABS = [
  { id: 'dash', label: 'Analisi', icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: 'routine', label: 'Routine', icon: <Clock className="w-4 h-4" /> },
  { id: 'products', label: 'Prodotti', icon: <ShoppingBag className="w-4 h-4" /> },
  { id: 'timeline', label: 'Risultati', icon: <BarChart2 className="w-4 h-4" /> },
  { id: 'winter', label: 'Inverno', icon: <Snowflake className="w-4 h-4" /> },
  { id: 'help', label: 'Aiuto', icon: <HelpCircle className="w-4 h-4" /> },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dash');

  const renderContent = () => {
    switch (activeTab) {
      case 'dash': return <Dashboard />;
      case 'routine': return <Routine />;
      case 'products': return <Products />;
      case 'timeline': return <Timeline />;
      case 'winter': return <WinterMode />;
      case 'help': return <Troubleshooting />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
            <h1 className="font-bold text-lg tracking-tight">K-Beauty Routine</h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  activeTab === tab.id 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="animate-in fade-in duration-500">
           {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-20 pb-safe">
        <div className="flex justify-around items-center h-16">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'
              }`}
            >
              {tab.icon}
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default App;
