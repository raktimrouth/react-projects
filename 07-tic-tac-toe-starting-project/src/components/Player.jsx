import { useState } from "react";

export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function handleClick(){
        setIsEditing((editing) => !editing) 
    }
    function inputChange(event){
        setPlayerName(event.target.value);
    }
    return (
            <li className={isActive ? 'active' : undefined}>
            <span className="player">
             {!isEditing && <span className="player-name">{playerName}</span>}
             {isEditing && <input type="text" required value={playerName} onChange={inputChange}/>} 
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}