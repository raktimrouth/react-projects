import NewTask from "./NewTask";

export default function Tasks({onAdd, tasks, onDelete}){
 
 return <section>
    <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
    <NewTask onAdd={onAdd}/>
    {tasks.length == 0 && 
    <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
    }
    {tasks.length > 0 && 
    <ul className="p-4 mt-6 rounded-md bg-stone-200/60">
        {tasks.map((task) => <li key={task.id} className="my-6 flex items-center justify-between">
            <span>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Clear</button>
        </li>)}
    </ul>
    
    }
 </section>
}