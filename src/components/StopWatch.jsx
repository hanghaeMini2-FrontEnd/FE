import React, { useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
  
function StopWatch() {
  
  const timestamp = + new Date();
  
  console.log(timestamp.toLocaleString())
  
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(86400000);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    <StopWatchDiv>
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </StopWatchDiv>
  );
}

const StopWatchDiv = styled.div`
  height: 230px;
  width: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
  
export default StopWatch;