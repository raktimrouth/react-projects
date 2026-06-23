import { useRef, useState } from "react"
import Modal from "./Modal";

export default function NewTask({onAdd}){
    const inputRef = useRef()
    const dialog = useRef()
    let enteredTask = '';
    function handleClick(){
        // ...VALIDATION
        enteredTask = inputRef.current.value
        if(enteredTask.trim() === ''){
            dialog.current.open()
            return;
        }
        onAdd(enteredTask)
        inputRef.current.value = '' //this is wrong shud have used state if u wanna manipulate DOM values
    }
    return (
    <>
    <Modal ref={dialog} label='Okay'>
    <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Task Input</h2>    
    <p  className='text-stone-700 mb-4'>Oops ... looks like you forgot to enter a value.</p>
    </ Modal>
    <div className="flex items-center gap-4">
        <input ref={inputRef} type="text" className="1-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
    </>
    )
}