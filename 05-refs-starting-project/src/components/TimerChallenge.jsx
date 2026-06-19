import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    const [timeRemaining, setRemainingTime] = useState(targetTime * 1000)
    const timer = useRef();
    const dialogRef = useRef()
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if(timeRemaining <=0){
        clearInterval(timer.current)
        setRemainingTime(targetTime*1000)
    }

    function handleStart(){
        timer.current = setInterval(() => {
            // setTimerExpired(true)
            // dialogRef.current.open()
            // setTimerStarted(false)
            setRemainingTime(prevTimeRemanining => prevTimeRemanining - 10)
        }, targetTime*1000);
        // setTimerStarted(true)
    }

    function handleStop(){
        clearInterval(timer.current)
        setTimerStarted(false)
    }

    return (
    <>
    <ResultModal ref={dialogRef} result="lost" targetTime={targetTime}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} challenge
        </button>

        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>

    )
}