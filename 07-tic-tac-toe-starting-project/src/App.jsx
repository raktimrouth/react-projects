import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function derviceActivePlayer(gameTurns){
    let curPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
          curPlayer = "O";
    }
    return curPlayer;
}

function App() {
  const [playerName,setPlayerName] = useState({
    'X': 'Player 1',
    'Y': 'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setActivePlayer] = useState("X") //REDUCE STATES AS MUCH AS POSSIBLE
  let gameBoard = [...initialGameBoard.map(items => [...items])]
    for (const turn of gameTurns){
        gameBoard[turn.square.row][turn.square.col] = turn.player
    }
  let winner = null 
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol)
    winner = playerName[firstSquareSymbol]
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let curPlayer = derviceActivePlayer(prevTurns)
      const updatedTurns = [{
        square:{ 
          row: rowIndex, 
          col: colIndex 
        },
        player: curPlayer
      },...prevTurns]

      return updatedTurns;
    })
  }

  function handleRematch(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol,newName){
    setPlayerName((prevPlayer) => {
      return { 
        ...prevPlayer,
        [symbol] : newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player nameChange={handlePlayerNameChange} initialName="Player 1" symbol="X" isActive={derviceActivePlayer(gameTurns) === 'X'}/>
          <Player nameChange={handlePlayerNameChange} initialName="Player 2" symbol="O" isActive={derviceActivePlayer(gameTurns) === 'O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRematch}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App;
