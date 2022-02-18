import {React,useEffect, useRef, useState} from 'react';


const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
  }
  
  const INITIAL_COUNT = 600
  

const Timer = () => {
    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STARTED)
  
    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    
  
    useInterval(
      () => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1)
        } else {
          setStatus(STATUS.STOPPED)
        }
      },
      status === STATUS.STARTED ? 1000 : null,
      
    )

    return (
        <div className="timer__clock">
        <div className="clock-item">{twoDigits(minutesToDisplay)}</div>
        <span>:</span>
        <div className="clock-item">    {twoDigits(secondsToDisplay)}</div>
        </div>
    );
}

export default Timer;


function useInterval(callback, delay) {
    const savedCallback = useRef()
  
    
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])
  
  
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [])
  }
  

  const twoDigits = (num) => String(num).padStart(2, '0')