import React, { useState, useRef } from "react";
import "./index.css";

export default function Stop() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef();

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const pause = () => {
    setIsRunning(!isRunning);
    clearInterval(timeRef.current);
  };

  const resume = () => {
    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
    setTime(0);
  };

  return (
    <div className="Stop">
      <button id="start" onClick={start}>
        Start
      </button>
      <button id="pauseResume" onClick={isRunning ? pause : resume}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button id="stop" onClick={stop}>
        Stop
      </button>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}
