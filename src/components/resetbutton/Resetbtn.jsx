import React from 'react'
import './Resetbtn.css'
const Resetbtn = ({resetboard,resetScores}) => {
  return (
   <div className="btncontainer">
     <div className='allbtns'>
        <button className='resetbtn' onClick={resetboard}>Reset Game board</button>
        <button className='resetbtn' onClick={resetScores}>Reset Score board</button>
    </div>
   </div>
  )
}

export default Resetbtn