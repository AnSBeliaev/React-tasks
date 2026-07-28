import { useState, useEffect } from "react";
// import './styles.css';

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);

  useEffect(() => {
    if (!hasTimerStarted) {
      return;
    }
    const timerId = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000);
    return () => {
        clearInterval(timerId)
    }
  }, [hasTimerStarted])

  const handleTimerStart = () => {
    setHasTimerStarted(true);
  }

  const handleTimerStop = () => {
    setHasTimerStarted(false);
  }

    const handleTimerClear = () => {
    setCount(0);
  }

  const formatTime = (count) => {
    let seconds = count % 60;
    let minutes = Math.floor(count / 60);

    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`
  }
  
  return (
    <div className="app">
      <h1>Timer</h1>
      <div>{formatTime(count)}</div>
      {hasTimerStarted ?
      <button onClick={handleTimerStop}>Стоп</button>:<button onClick={handleTimerStart}>Старт</button>}
      <button onClick={handleTimerClear}>Сброс</button> 
    </div>
  );
}
