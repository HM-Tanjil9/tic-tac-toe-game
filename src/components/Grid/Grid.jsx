import { useState } from 'react';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import checkWinner from '../../utils/checkWinner';
import Card from '../Card/Card';
import './Grid.css';

function Grid({numberOfCards}) {
    const [turn, setTurn] = useState(true); // false -> x, true -> 0
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState(null);
    
    function play(index) {
        console.log('move played', index);
        if(turn == true) {
            board[index] = 'O';
        } else {
            board[index] = 'X';
        }
        const win = checkWinner(board, turn ? 'O' : 'X');
        if(win) {
            toast.success(`Congratulation ${win} win the game!!`);
            setWinner(win);
            
        }
        setBoard([...board]);
        setTurn(!turn);
        
    }
    function reset() {
        setTurn(true);
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
    }
    return (
        <div className='grid-wrapper'>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
            {winner && (
                <>
                    <h1 className='turn-highlight'>Winner is {winner}</h1>
                    <button className='reset' onClick={reset}>Reset Game</button>
                    
                </>
            )}
            <h1 className='turn-highlight'>Current turn: {(turn) ? 'O' : 'X'}</h1>
            <div className='grid'>
                {board.map((value, index) => {   
                    return <Card gameEnd={winner ? true : false} onPlay={play} player={value} key={index} index={index}/>
                })}
            </div>
        </div>
    )
}

export default Grid