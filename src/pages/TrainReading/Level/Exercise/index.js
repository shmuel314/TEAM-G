import React from 'react'
import './style.css';
import Headphone from './Level_Headphone.png'
import FooterStart from '../../../../components/common/FooterStart'

const index = () => {
  return (
    <div className='level_page'>
      {/* <h1>Level Exercise</h1> */}
      <img src={Headphone} alt="Headphone" />
      <FooterStart />
    </div>
  )
}

export default index
