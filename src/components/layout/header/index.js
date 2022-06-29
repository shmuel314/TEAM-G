

import { NavBar } from "../../common/Nav/index";

import { useContext, useState } from 'react';
import { pageNameContext } from '../Layout';
import nav from './img/nav-icon.png';
import photoPic from './img/userPhoto.png';
import "./header.css"


//group c- yoav & yehoshua 

export default function Header() {
   const pageNameContextLocal = useContext(pageNameContext) //assuming context is in use
     console.log(pageNameContextLocal.pageName);
   
   return (
      <div className='header'>
         <div className='left'>
            <img src={nav} alt="navbar"></img>
         </div>

         <div className='mid'>
            {pageNameContextLocal.pageName}
         </div>

         <div className='right'>
            <img src={photoPic} alt="User Name" />
         </div>
      </div>
  );
}
