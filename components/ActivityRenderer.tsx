
import React, { useState, useEffect } from 'react';
import { Activity } from '../types';

interface ActivityRendererProps {
  activity: Activity;
  onResult: (isCorrect: boolean) => void;
  isCompleted: boolean;
}

const ActivityRenderer: React.FC<ActivityRendererProps> = ({ activity, onResult, isCompleted }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue('');
  }, [activity.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCompleted) return;
    
    const isCorrect = inputValue.trim().toLowerCase() === String(activity.answer).toLowerCase();
    onResult(isCorrect);
  };

  const renderVisual = () => {
    switch (activity.type) {
      case 'dem_hinh_nang_cao':
        const groups = activity.data.groups;
        const size = activity.data.size;
        return (
          <div className="flex flex-wrap gap-6 justify-center my-6">
            {Array.from({ length: groups }).map((_, i) => (
              <div key={i} className="bg-amber-50 p-3 rounded-xl border-2 border-dashed border-amber-200 flex gap-2">
                {Array.from({ length: size }).map((_, j) => (
                  <div key={j} className="text-3xl">🥢</div>
                ))}
              </div>
            ))}
          </div>
        );
      case 'so_do_doan_thang':
        if (activity.data.sequence) {
          return (
            <div className="flex items-center justify-center my-8 gap-0">
              {activity.data.sequence.map((val: number | null, i: number) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-sm text-lg ${
                      val === null ? 'bg-indigo-100 text-indigo-600 animate-pulse border-2 border-dashed border-indigo-400' : 'bg-white border-2 border-slate-200 text-slate-700'
                    }`}>
                      {val === null ? '?' : val}
                    </div>
                  </div>
                  {i < activity.data.sequence.length - 1 && (
                    <div className="w-10 h-1 bg-slate-200" />
                  )}
                </React.Fragment>
              ))}
            </div>
          );
        }
        return null;
      case 'hinh_hoc_truc_quan':
        return (
          <div className="flex justify-center my-8 p-6 bg-slate-50 rounded-2xl">
            {activity.data.shape === 'square' && (
              <div className="w-32 h-32 border-4 border-indigo-500 bg-indigo-50 rounded-sm flex items-center justify-center font-bold text-indigo-300">HV</div>
            )}
            {activity.data.shape === 'rectangle' && (
              <div className="w-48 h-32 border-4 border-emerald-500 bg-emerald-50 rounded-sm flex items-center justify-center font-bold text-emerald-300">HCN</div>
            )}
            {activity.data.shape === 'triangle' && (
              <svg width="120" height="100" viewBox="0 0 120 100">
                <path d="M60 10 L10 90 L110 90 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="4" />
              </svg>
            )}
            {activity.data.item === 'ice' && <div className="text-6xl animate-pulse">🧊</div>}
          </div>
        );
      case 'tinh_toan':
        if (activity.data.n1 && activity.data.n2) {
          const symbol = activity.data.n1 > 20 && activity.data.n2 < 10 ? 'x' : (activity.data.n1 % activity.data.n2 === 0 ? ':' : '+');
          return (
            <div className="flex justify-center my-8 items-center gap-4 text-4xl font-black">
              <span className="text-slate-800">{activity.data.n1}</span>
              <span className="text-indigo-600">{activity.data.symbol || symbol}</span>
              <span className="text-slate-800">{activity.data.n2}</span>
              <span className="text-slate-400">=</span>
              <span className="px-6 py-2 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl text-indigo-600">?</span>
            </div>
          );
        }
        if (activity.data.display) {
          return (
             <div className="text-3xl font-bold text-center my-6 text-indigo-600 bg-indigo-50 p-4 rounded-xl inline-block mx-auto">
               {activity.data.display}
             </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center">
      <p className="text-xl font-bold text-slate-800 text-center leading-relaxed max-w-lg">
        {activity.prompt}
      </p>

      {renderVisual()}

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <input 
          type="text"
          value={isCompleted ? String(activity.answer) : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isCompleted}
          placeholder="???"
          className={`w-full p-4 text-2xl font-bold text-center rounded-2xl border-4 transition-all focus:outline-none shadow-inner ${
            isCompleted 
              ? 'bg-green-50 border-green-500 text-green-700' 
              : 'bg-white border-slate-200 focus:border-indigo-400 text-slate-700'
          }`}
        />
        {!isCompleted && (
          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
          >
            Nộp bài
          </button>
        )}
      </form>
    </div>
  );
};

export default ActivityRenderer;
