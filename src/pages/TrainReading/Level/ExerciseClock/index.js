import React from 'react'
import './style.css';
import SoundBar from "./SoundBar.png"
// import Clock from '../../../../components/common/Clock'


const index = () => {
  return (
    <div>
      <h1>Exercise Clock</h1>
      {/* <Clock/> */}
      <img src={SoundBar}/>
    </div>
  )
}

export default index
