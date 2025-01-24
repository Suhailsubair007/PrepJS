import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timer = isRunning && setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(timer); // Cleanup on unmount or stop
  }, [time, isRunning]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Timer: {time}s</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setTime(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
};

export default Timer;
