import React from 'react'
import './Board.css'
import Box from '../box/Box'
const Board = ({board,onClick}) => {
  return (
    <>
    <div className='boardname'>
        <p>Game Board</p>
    </div>
    <div className='board'>
        {board.map((value,idx)=>{
            return(
                <Box value={value} onClick={()=>value===null &&onClick(idx)}/>
            )
        })}
       </div>
       </>
  )
}

export default Board