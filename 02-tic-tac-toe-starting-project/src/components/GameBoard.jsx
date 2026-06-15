
export default function GameBoard({onSelectSquare, board}){
    // const [gameBoard,setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex, colIndex, playerSymbol){
    //     setGameBoard((prevGameBoard) => {
    //         // CREATING AN IMMUTABLE COPY
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = playerSymbol
    //         return updatedBoard; 
    //     });

    //     onSelectSquare();
    // }

    
    return (
        <ol id="game-board">
            {board.map((row,rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button disabled={playerSymbol} onClick={() => onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>        
    );
}