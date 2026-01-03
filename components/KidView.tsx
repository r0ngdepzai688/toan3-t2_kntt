
import React, { useState, useEffect } from 'react';
import { Lesson, Activity } from '../types';
import ActivityRenderer from './ActivityRenderer';
import Mascot from './Mascot';
import { MASCOT_DIALOGUES } from '../constants';
import { Sparkles, ArrowRight, Trophy } from 'lucide-react';

interface KidViewProps {
  lesson: Lesson;
  onCompleteActivity: (activityId: string, score: number) => void;
  activityScores: Record<string, number>;
}

const KidView: React.FC<KidViewProps> = ({ lesson, onCompleteActivity, activityScores }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'none' | 'success' | 'hint', text: string }>({
    type: 'none',
    text: ''
  });
  const [showLessonSummary, setShowLessonSummary] = useState(false);

  useEffect(() => {
    setCurrentIdx(0);
    setFeedback({ type: 'none', text: '' });
    setShowLessonSummary(false);
  }, [lesson.id]);

  const currentActivity = lesson.activities[currentIdx];
  const isLastActivity = currentIdx === lesson.activities.length - 1;
  const isCurrentDone = activityScores[currentActivity.id] !== undefined;

  const handleResult = (isCorrect: boolean) => {
    if (isCorrect) {
      setFeedback({ type: 'success', text: MASCOT_DIALOGUES.success });
      onCompleteActivity(currentActivity.id, 100);
      if (isLastActivity) {
        setTimeout(() => setShowLessonSummary(true), 1500);
      }
    } else {
      setFeedback({ type: 'hint', text: currentActivity.hint || MASCOT_DIALOGUES.hint });
    }
  };

  const nextActivity = () => {
    if (!isLastActivity) {
      setCurrentIdx(prev => prev + 1);
      setFeedback({ type: 'none', text: '' });
    }
  };

  if (showLessonSummary) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-4 border-orange-100 animate-bounce-in">
        <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={48} />
        </div>
        <h2 className="text-3xl font-bold text-orange-600 mb-2">Chúc mừng phi hành gia!</h2>
        <p className="text-slate-600 mb-8">Con đã vượt qua thử thách: <br/> <span className="font-bold text-slate-800">{lesson.title}</span></p>
        <div className="flex justify-center gap-4">
          <Mascot state="happy" dialogue={MASCOT_DIALOGUES.completion} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-orange-200">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Mascot 
            state={feedback.type === 'success' ? 'happy' : feedback.type === 'hint' ? 'thinking' : 'idle'} 
            dialogue={feedback.text || `Robot chào con! Cùng học ${lesson.title} nhé!`} 
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-orange-600 mb-2 flex items-center justify-center md:justify-start gap-2">
              {lesson.icon} {lesson.title}
            </h2>
            <div className="prose prose-orange text-slate-600 font-medium" dangerouslySetInnerHTML={{ __html: lesson.raw_html }} />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {lesson.activities.map((a, idx) => (
          <div 
            key={a.id}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIdx ? 'w-8 bg-orange-500' : 
              activityScores[a.id] ? 'w-2.5 bg-green-500' : 'w-2.5 bg-slate-200'
            }`}
          />
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 border-t-4 border-orange-400 min-h-[400px] flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">
            Thử thách {currentIdx + 1}
          </div>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="flex-1">
          <ActivityRenderer activity={currentActivity} onResult={handleResult} isCompleted={isCurrentDone} />
        </div>
        <div className="mt-8 flex justify-end">
          {isCurrentDone && !isLastActivity && (
            <button onClick={nextActivity} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg transition-all transform hover:-translate-y-1">
              Tiếp tục <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default KidView;
