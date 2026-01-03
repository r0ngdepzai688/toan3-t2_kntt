
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
      case 'toan_loi_van':
        return (
          <div className="my-6 p-6 bg-orange-50 border-2 border-orange-100 rounded-2xl flex flex-col items-center justify-center">
            <div className="text-5xl mb-3">📖</div>
            {activity.data.options && (
              <div className="grid grid-cols-1 gap-2 w-full max-w-sm">
                {activity.data.options.map((opt: string) => (
                  <div key={opt} className="p-3 bg-white border border-orange-200 rounded-xl text-sm font-medium text-slate-700">
                    • {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'hinh_hoc_truc_quan':
        return (
          <div className="flex flex-col items-center my-8 p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            {activity.data.shape === 'rectangle' && (
              <div className="relative">
                <div className="w-48 h-24 border-4 border-indigo-500 bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">
                  HCN
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-slate-500">{activity.data.w} cm</div>
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 font-bold text-slate-500">{activity.data.h} cm</div>
              </div>
            )}
            <p className="mt-8 text-sm text-slate-400 italic">Quan sát kích thước trên hình</p>
          </div>
        );
      case 'so_do_doan_thang':
        if (activity.data.sequence) {
          return (
            <div className="flex items-center justify-center my-10 gap-2 overflow-x-auto pb-4">
              {activity.data.sequence.map((val: number | null, i: number) => (
                <React.Fragment key={i}>
                  <div className={`min-w-[60px] h-12 rounded-xl flex items-center justify-center font-bold shadow-sm text-lg border-2 ${
                    val === null 
                      ? 'bg-orange-100 text-orange-600 animate-pulse border-orange-400' 
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                    {val === null ? '?' : val.toLocaleString('vi-VN')}
                  </div>
                  {i < activity.data.sequence.length - 1 && (
                    <div className="text-slate-300">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          );
        }
        return null;
      case 'tinh_toan':
        if (activity.data.n1 !== undefined && activity.data.n2 !== undefined) {
          return (
            <div className="flex justify-center my-8 items-center gap-4 text-4xl font-black">
              <span className="text-slate-800">{activity.data.n1.toLocaleString('vi-VN')}</span>
              <span className="text-orange-600">{activity.data.symbol}</span>
              <span className="text-slate-800">{activity.data.n2.toLocaleString('vi-VN')}</span>
              <span className="text-slate-400">=</span>
              <div className="w-24 h-16 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center text-orange-600">?</div>
            </div>
          );
        }
        if (activity.data.display) {
          return (
             <div className="text-3xl font-bold text-center my-8 text-indigo-600 bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100 inline-block mx-auto">
               {activity.data.display}
             </div>
          );
        }
        return null;
      default:
        return <div className="my-10 text-6xl text-center">🌟</div>;
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center w-full">
      <h3 className="text-xl font-bold text-slate-800 text-center leading-relaxed max-w-2xl px-4">
        {activity.prompt}
      </h3>

      {renderVisual()}

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4 px-4">
        <div className="relative">
          <input 
            type="text"
            value={isCompleted ? String(activity.answer) : inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isCompleted}
            placeholder="Gõ câu trả lời..."
            className={`w-full p-5 text-2xl font-bold text-center rounded-2xl border-4 transition-all focus:outline-none shadow-inner ${
              isCompleted 
                ? 'bg-green-50 border-green-500 text-green-700' 
                : 'bg-white border-slate-200 focus:border-orange-400 text-slate-700'
            }`}
          />
          {isCompleted && (
            <div className="absolute -right-4 -top-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          )}
        </div>
        
        {!isCompleted && (
          <button 
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-orange-200 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            KIỂM TRA 🚀
          </button>
        )}
        
        {isCompleted && activity.explanation && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-xl">
             <p className="text-xs text-blue-700 leading-relaxed font-medium">
               <span className="font-bold">Giải thích:</span> {activity.explanation}
             </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ActivityRenderer;
