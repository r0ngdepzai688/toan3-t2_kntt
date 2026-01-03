
import React from 'react';
import { Lesson } from '../types';
import { CheckCircle2, Star, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  completedLessons: number[];
  topics: { id: number; title: string; range: string }[];
  lessons: Lesson[];
}

const Sidebar: React.FC<SidebarProps> = ({
  currentLessonId,
  onSelectLesson,
  completedLessons,
  topics,
  lessons
}) => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-black text-slate-800 text-xl tracking-tight">HÀNH TRÌNH</h2>
        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-sm">
          <Star size={14} fill="currentColor" /> {completedLessons.length}
        </div>
      </div>

      <div className="space-y-6">
        {topics.map(topic => {
          const topicLessons = lessons.filter(l => l.topic === topic.title);
          if (topicLessons.length === 0) return null;
          
          return (
            <div key={topic.id} className="space-y-3">
              <div className="flex items-center gap-2 px-2">
                <div className="w-1.5 h-4 bg-orange-400 rounded-full" />
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">
                  Chủ đề {topic.id}
                </h3>
              </div>
              <div className="space-y-1.5">
                {topicLessons.map(lesson => {
                  const isCurrent = currentLessonId === lesson.id;
                  const isCompleted = completedLessons.includes(lesson.id);
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all duration-200 ${
                        isCurrent 
                          ? 'bg-orange-500 text-white shadow-lg shadow-orange-100 scale-[1.02]' 
                          : 'hover:bg-slate-50 text-slate-600 border border-transparent hover:border-slate-100'
                      }`}
                    >
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-inner
                        ${isCurrent ? 'bg-white/20' : 'bg-slate-100'}
                      `}>
                        {lesson.icon}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className={`text-xs font-black truncate ${isCurrent ? 'text-white' : 'text-slate-700'}`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {isCompleted ? (
                            <span className={`text-[9px] font-black flex items-center gap-0.5 ${isCurrent ? 'text-white/80' : 'text-green-500'}`}>
                              <CheckCircle2 size={10} /> HOÀN THÀNH
                            </span>
                          ) : (
                            <span className={`text-[9px] font-bold ${isCurrent ? 'text-white/60' : 'text-slate-400'}`}>
                              CHƯA HỌC
                            </span>
                          )}
                        </div>
                      </div>
                      {isCurrent && <ChevronRight size={16} className="text-white/50" />}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
