import React from 'react'

function SelectPeriod(props){

  function detectChange(v) {
      console.log(v.target.value) 
      // props.isPeriod[1](selectPeriod.value)

  }
  return <>
  <select name="readtime" id="readtime" onChange={(v)=>detectChange(v)}>
  <option value="Today"> today </option>
  <option selected value="last week"> last week </option>
  <option value="2 weeks"> 2 weeks </option>
  <option value= "month"> month </option>
  </select> 
 
  </>
}


export default SelectPeriod