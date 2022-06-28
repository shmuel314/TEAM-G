import UmooveApi from "../../../components/api/UmooveApi";
import { useContext, useState} from 'react'
import {pageNameContext} from "../../../components/layout/Layout.js"
import "./style.css"
import arow from "./arow.png"
import {useNavigate} from 'react-router-dom'
import SabmitBtn from '../../../components/common/SubmitBtn'


function Exercise(){
    UmooveApi.API_loadUmooveLibrary().then(()=>{
    }).catch((error)=>{console.error(error)})
    UmooveApi.API_startUmoove()
    const {RoundNumber, setDailyStoppingDistance,DailyStoppingDistance }= useContext(pageNameContext)
    const StoppingDistance = 3
    const side = 1
    
        function Round(){
            if(RoundNumber===5){
                setDailyStoppingDistance(DailyStoppingDistance+StoppingDistance)
                setDailyStoppingDistance(DailyStoppingDistance/4)
                console.log(UmooveApi.API_getDistance());
            } 
            else{
                console.log(UmooveApi.API_getDistance());
                 console.log(DailyStoppingDistance);
    setDailyStoppingDistance(DailyStoppingDistance+StoppingDistance)
   }
    }
    
    switch(side){
        case 0:
      return <>
      <div className="purpleDot"></div>
      <div className="bo">
        <SabmitBtn name="stop" path={RoundNumber<5? '/train-focus/StartFocus': '/train-focus/result'} onclick={Round}/>
        </div>
     </>
     break;
     case 1:
        return <>
        <div className="purpleDot"></div>
        <div className="back_center_Left"> <div className="text_box">Move the phone a bit to the left so the dot is in your center</div> 
        <img  className="flip_img_left"src={arow} alt="img"/></div> 
        <SabmitBtn name="stop" path={RoundNumber<5? '/train-focus/StartFocus': '/train-focus/result'} onclick={Round}/>
        </>
       break;
       case -1:
        return <>
        <div className="purpleDot"></div>
            <div className="back_center_Right"> <div className="text_box">Move the phone a bit to the right so the dot is in your center</div>
            <img  className="flip_img_right"src={arow} alt="img"/></div>
            <SabmitBtn name="stop" path={RoundNumber<5? '/train-focus/StartFocus': '/train-focus/result'} onclick={Round}/>
           </>
       break;
       default:
        break;
     
    }
    
    
       
    }

    export default Exercise