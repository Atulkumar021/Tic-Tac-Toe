import React from 'react'
import './Scoreboard.css'
const Scoreboard = ({scores,Xplaying,resetScores}) => {
    const {xScore,oScore}=scores
  return (
       <>
       <div>
         <div className="boardname">
         <p>Score Board 👇🏻</p>
         </div>
    <div className='Scoreboard'>
        <span className={`score x-score ${!Xplaying && 'inactive'}`}> score X : {xScore}</span>
        <span className={`score o-score ${Xplaying && 'inactive'}`}> score O : {oScore}</span>
    </div>
       </div>
   </>
  )
}

export default Scoreboard