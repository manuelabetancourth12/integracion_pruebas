import React, { useState, useRef } from 'react';

export default function CountdownTimer() {
  const [input, setInput] = useState('');
  const [seconds, setSeconds] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = () => {
    if (!input || isNaN(Number(input))) return;
    setSeconds(Number(input));
    setRunning(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev && prev > 0) return prev - 1;
        if (intervalRef.current) clearInterval(intervalRef.current);
        setRunning(false);
        return 0;
      });
    }, 1000);
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <label className="mb-4 text-lg font-semibold text-slate-200">Contador regresivo (segundos):</label>
      <div className="flex gap-4 mb-6">
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={running}
          data-testid="countdown-input"
          className="w-24 px-3 py-2 rounded-lg border-2 border-slate-400 text-lg text-center bg-slate-900 text-slate-100 shadow-md"
          min={0}
        />
        <button
          onClick={startCountdown}
          disabled={running || !input}
          data-testid="start-btn"
          className="px-6 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 disabled:opacity-50"
        >
          Iniciar
        </button>
      </div>
      <div
        data-testid="countdown-value"
        className="text-6xl font-bold text-sky-300 mt-4 min-h-[60px]"
      >
        {seconds !== null ? seconds : ''}
      </div>
    </div>
  );
}
