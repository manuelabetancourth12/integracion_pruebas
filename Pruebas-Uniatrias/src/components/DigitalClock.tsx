import { useEffect, useState } from 'react';

const pad = (n: number) => n.toString().padStart(2, '0');

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <label className="mb-4 text-lg font-semibold text-slate-200">Reloj Digital</label>
      <div
        data-testid="digital-clock"
        className="text-7xl font-mono font-bold text-sky-300 bg-slate-800 px-12 py-8 rounded-2xl shadow-lg border-2 border-slate-600"
      >
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}
