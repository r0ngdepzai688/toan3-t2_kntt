
import React from 'react';

interface MascotProps {
  state: 'idle' | 'happy' | 'thinking' | 'sad';
  dialogue: string;
}

const Mascot: React.FC<MascotProps> = ({ state, dialogue }) => {
  const primaryColor = "#f97316"; // Orange 500
  const secondaryColor = "#fbbf24"; // Amber 400

  return (
    <div className="flex flex-col items-center gap-3 max-w-[280px]">
      <div className="relative group">
        <svg width="100" height="100" viewBox="0 0 100 100" className={`transition-all duration-500 ${state === 'happy' ? 'animate-bounce' : ''}`}>
          <line x1="50" y1="20" x2="50" y2="10" stroke={primaryColor} strokeWidth="4" />
          <circle cx="50" cy="8" r="4" fill={secondaryColor} className={state === 'happy' ? 'animate-pulse' : ''} />
          <rect x="30" y="20" width="40" height="35" rx="8" fill={primaryColor} />
          <rect x="35" y="25" width="30" height="20" rx="4" fill="#1e1b4b" />
          {state === 'happy' ? (
            <>
              <path d="M40 35 Q42 30 45 35" stroke={secondaryColor} strokeWidth="2" fill="none" />
              <path d="M55 35 Q57 30 60 35" stroke={secondaryColor} strokeWidth="2" fill="none" />
            </>
          ) : state === 'thinking' ? (
            <>
              <circle cx="42" cy="35" r="2" fill={secondaryColor} />
              <rect x="55" y="34" width="6" height="2" fill={secondaryColor} />
            </>
          ) : (
            <>
              <circle cx="42" cy="35" r="2.5" fill={secondaryColor} />
              <circle cx="58" cy="35" r="2.5" fill={secondaryColor} />
            </>
          )}
          <rect x="35" y="55" width="30" height="30" rx="4" fill={primaryColor} />
          <rect x="42" y="60" width="16" height="10" rx="2" fill="#fdba74" opacity="0.5" />
          <rect x="25" y="60" width="10" height="4" rx="2" fill={primaryColor} />
          <rect x="65" y="60" width="10" height="4" rx="2" fill={primaryColor} />
        </svg>
      </div>
      <div className="relative bg-white border-2 border-orange-100 rounded-2xl p-3 shadow-sm">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-orange-100 rotate-45" />
        <p className="text-sm font-bold text-slate-700 text-center leading-relaxed italic">
          "{dialogue}"
        </p>
      </div>
    </div>
  );
};

export default Mascot;
