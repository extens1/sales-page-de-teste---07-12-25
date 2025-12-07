import React, { useState, useEffect } from 'react';
import { AlarmClock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 58,
    seconds: 51
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 58, seconds: 51 }; // Reset loop
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="inline-flex items-center gap-2 bg-red-400 text-white px-6 py-2 rounded-full font-bold mb-4 animate-pulse">
        <AlarmClock size={20} />
        <span>Oferta por tempo limitado!</span>
      </div>
      
      <div className="flex items-center gap-4 text-red-600">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-xs uppercase font-semibold text-gray-500">Horas</span>
        </div>
        <span className="text-3xl font-bold -mt-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-xs uppercase font-semibold text-gray-500">Minutos</span>
        </div>
        <span className="text-3xl font-bold -mt-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-xs uppercase font-semibold text-gray-500">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;