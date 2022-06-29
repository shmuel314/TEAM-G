import './Style.css'
import React, {  useState, useRef, useEffect, useContext } from 'react';
import SubmitBtn from '../../../components/common/SubmitBtn';
import moveDot from '../../../assets/img/trainFocus/moveDot.png'
// import {pageNameContext} from '../../../components/layout/Layout'

  
// Creator : Team G - Orit F  
function CalibrateCam(){
  // const [setShowHeader] = useContext(pageNameContext)
const imgMiddleWidth = 50 //total icon width is ~100px. to place it in center using "left" style we need to ident it 50px left
const leftMargin = 80

  const [posX, setPosX] = useState(window.innerWidth/2-imgMiddleWidth);

  const touch = (e) => {
    let total = (window.innerWidth-leftMargin)
    if(posX<0 && posX!=-20){
        setPosX(-20)
        return false;
    }
    else if(posX > total){       
        setPosX(total)
        return false;
    }
    else
        setPosX(e.changedTouches[0].clientX-imgMiddleWidth); 
  };

  const onClickBtn=()=>{
      localStorage.setItem('cameraPosX', posX);
  }

  useEffect(()=>{
    // setShowHeader(false)
  },[]);

   return (
    <div className='calibrateCam'>
        <div className='place' style={{left:posX+'px'}}
            onTouchMove={(e) => touch(e)}
            onTouchEnd={(e) => touch(e)}>
            <img className='dragImg' src={moveDot} alt=""/>
        </div>      
        <div className='arrowMove'>
            <span>Slide the arrow left/right so that it points at your camera</span>
        </div>
        <SubmitBtn name="continue" path="/train-focus/StartFocus" onclick={onClickBtn} />
    </div>
   );
}


export default CalibrateCam