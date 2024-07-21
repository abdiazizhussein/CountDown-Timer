import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 3600); // 24 hours in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const resetTimer = () => setTimeLeft(24 * 3600); // Reset to 24 hours

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-center mt-40">
      <h1 className="text-2xl mb-4">Countdown Timer</h1>
      <div className="text-6xl mb-4">{formatTime(timeLeft)}</div>
      <button onClick={resetTimer} className="bg-green-500 text-white p-2 rounded">Reset Timer</button>
    </div>
  );
};

export default CountdownTimer;
