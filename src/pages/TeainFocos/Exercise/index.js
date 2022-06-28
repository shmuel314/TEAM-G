import { useContext} from 'react'
import {pageNameContext} from '../../../components/layout';
import "./style.css"
import arow from "./arow.png"
import {useNavigate} from 'react-router-dom'
import SabmitBtn from '../../../components/common/SabmitBtn'
const {setRoundNumber }= useContext(pageNameContext)
function Exercise(){
    const navigate= useNavigate();
    const StoppingDistance = 3
    const side = 0
    
    
        function Round(){
            if(RoundNumber>4){
                setDailyStoppingDistance(DailyStoppingDistance/4)
                navigate('/TrainFocos/FocosResult', {RoundNumber})
            } 
             else{
    setRoundNumber(RoundNumber+1)
    setDailyStoppingDistance(DailyStoppingDistance+StoppingDistance)
    navigate('/TrainFocos/StartFocos')
   }
    }
    
    switch(side){
        case 0:
      return <>
      <SabmitBtn/>
          <button className= "button" onClick={Round}>stop</button>
     </>
     break;
     case 1:
        return <>
        <div className="back_center_Left"> <div className="text_box">Move the phone a bit to the left so the dot is in your center</div> 
        <img  className="flip_img_left"src={arow} alt="img"/></div> 
        <button className= "button" onClick={Round}>stop</button>
        </>
       break;
       case 2:
        return <>
            <div className="back_center_Right"> <div className="text_box">Move the phone a bit to the right so the dot is in your center</div>
            <img  className="flip_img_right"src={arow} alt="img"/></div>
            <button className= "button" onClick={Round}>stop</button>
           </>
       break;
       default:
        break;
     
    }
    
    
       
    }

    export default Exercise




 