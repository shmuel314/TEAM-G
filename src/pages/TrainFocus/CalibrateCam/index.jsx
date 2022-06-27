import './style.module.css'
import React, {  useState, useRef } from 'react';


  
// Creator : Team G - Shmuel
function CalibrateCam(){

   const dragItem = useRef()
const [posX, setPosX] = useState(0);
let sp = 0//window.innerWidth/2

const dragStart = (e) => {
     console.log(dragItem.current.offsetLeft)
  };
  const drag = (e) => {
    setPosX(e.clientX-49);
    
  };

  const dragEnd = (e) => {
    
    setPosX(e.clientX-49);
  };

  return (
    <div className='calibrateCam'>
    {   
      <div className='place' style={{left:posX+'px', position:'fixed', zIndex:'1000', top:'169px'}}
      onDragStart={(e) => dragStart(e)}
      onDrag={(e) => drag(e)}
      onDragEnd={(e) => dragEnd(e)}
      ref={dragItem}
        >
          <img src={require("./moveDot.png")} alt=""/>
      </div>
      
      }
      <button id="btnContinue">continue</button>
    </div>
  );
}


export default CalibrateCam