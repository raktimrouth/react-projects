import { useImperativeHandle, useRef } from "react"
import {createPortal} from 'react-dom'
export default function ResultModal({ref, remainingTime, targetTime,onReset}){
    const dialog = useRef();
    const score = Math.round((1- remainingTime/(targetTime * 1000))*100)
    const userLost = remainingTime <= 0
    useImperativeHandle(ref,()=> {
        return {
            open() {
                dialog.current.showModal()
    
            }

        }
    }) 
    return (
        createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            <h2>You {!userLost ? 'won' : 'lost'}</h2>
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{(remainingTime/1000).toFixed(2)} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
        ,document.getElementById('modal')
        )

    )
}