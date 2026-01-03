
import React from 'react';
import { Lesson, UserProgress } from '../types';
import { CheckCircle2, AlertCircle, TrendingUp, BarChart3, Layout } from 'lucide-react';

interface TeacherViewProps {
  lesson: Lesson;
  progress: UserProgress;
}

const TeacherView: React.FC<TeacherViewProps> = ({ lesson, progress }) => {
  const completedInLesson = lesson.activities.filter(a => progress.activityScores[a.id] !== undefined);
  const completionRate = Math.round((completedInLesson.length / lesson.activities.length) * 100);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lesson.topic}</span>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-xs font-medium text-slate-500">Giáo án lớp 3</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800">{lesson.title}</h2>
          </div>
          
          <div className="flex items-center gap-6 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100">
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Tiến độ lớp</p>
              <p className="text-2xl font-black text-indigo-600">{completionRate}%</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Hoạt động</p>
              <p className="text-2xl font-black text-slate-800">{lesson.activities.length}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <h3 className="font-bold text-slate-700 flex items-center gap-2">
              <Layout size={18} className="text-indigo-500" /> Chi tiết hoạt động & Đáp án
            </h3>
            
            <div className="space-y-3">
              {lesson.activities.map((activity, idx) => (
                <div key={activity.id} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">#{idx + 1} - {activity.type}</span>
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                       <CheckCircle2 size={12} /> Đáp án: {String(activity.answer)}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-2">{activity.prompt}</p>
                  <div className="bg-slate-50 rounded-lg p-3 border-l-4 border-amber-400">
                    <p className="text-xs text-slate-500 italic">
                      <span className="font-bold not-italic text-amber-600 uppercase mr-2">Hướng dẫn:</span> 
                      {activity.explanation || activity.hint}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-600 rounded-xl p-5 text-white shadow-lg shadow-indigo-200">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <BarChart3 size={18} /> Phân tích học tập
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs opacity-80">Độ khó bài học</span>
                  <span className="text-sm font-bold">Trung bình</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full">
                  <div className="bg-white w-2/3 h-full rounded-full" />
                </div>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-xs opacity-80">Thời gian trung bình</span>
                  <span className="text-sm font-bold">12 phút</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full">
                  <div className="bg-white w-1/2 h-full rounded-full" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h4 className="font-bold text-slate-700 flex items-center gap-2 mb-4">
                <TrendingUp size={18} className="text-green-500" /> Lưu ý sư phạm
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-slate-600">
                  <div className="mt-1"><AlertCircle size={14} className="text-indigo-400" /></div>
                  Nhấn mạnh sự khác biệt giữa cm và mm.
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                  <div className="mt-1"><AlertCircle size={14} className="text-indigo-400" /></div>
                  Khuyến khích học sinh sử dụng vật thật để đo đạc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherView;
