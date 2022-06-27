import { useEffect } from "react";
import {FiLock} from "react-icons/bs"
export default function FunctionBtn(props){

switch(props.name){
  case "Train Reading":
    {<button type="button" className="word">
      
      {props.name}
    {props.name === "Weekly Assessment" && <div className="word">`access in {countDays} days`</div>}
    </button>}
  case "Train Focus":
  case "Weekly Assessment":
  case "Freestyle":
}

    return <> 
    <button type="button" className="word">{props.name}
    {props.name === "Weekly Assessment" && <div className="word">`access in {countDays} days`</div>}
    </button>
    </>
  ;

  function countDays(props){}
}
