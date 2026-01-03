
import React from 'react';
import { Lesson } from '../types';
import { CheckCircle2, Circle, Star, Lock } from 'lucide-react';

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
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-slate-800 text-lg">Bản đồ học tập</h2>
        <div className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
          <Star size={12} fill="currentColor" /> {completedLessons.length}
        </div>
      </div>

      {topics.map(topic => {
        const topicLessons = lessons.filter(l => l.topic === topic.title);
        
        return (
          <div key={topic.id} className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
              {topic.title}
            </h3>
            <div className="space-y-1">
              {topicLessons.map(lesson => {
                const isCurrent = currentLessonId === lesson.id;
                const isCompleted = completedLessons.includes(lesson.id);
                
                return (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson.id)}
                    className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${
                      isCurrent 
                        ? 'bg-indigo-50 border-2 border-indigo-200 shadow-sm' 
                        : 'hover:bg-slate-50 border-2 border-transparent'
                    }`}
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-sm
                      ${isCurrent ? 'bg-indigo-600' : 'bg-slate-100'}
                    `}>
                      {lesson.icon}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className={`text-sm font-bold truncate ${isCurrent ? 'text-indigo-700' : 'text-slate-700'}`}>
                        {lesson.title}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {isCompleted ? (
                          <span className="text-[10px] text-green-600 font-bold flex items-center gap-0.5">
                            <CheckCircle2 size={10} /> Đã xong
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-medium">Chưa học</span>
                        )}
                      </div>
                    </div>
                    {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
