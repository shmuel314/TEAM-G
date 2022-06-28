<<<<<<< HEAD
import { useContext, useState } from 'react';
import { pageNameContext } from '../Layout';
import nav from './img/nav-icon.png';
import photoPic from './img/userPhoto.png';
import "./header.css"
=======
import { useContext, useState } from "react";
import { pageNameContext, navBarContext } from "../Layout";
import nav from "./img/nav-icon.png";
import { NavBar } from "../../common/Nav/index.js";
>>>>>>> 697004526cc49b4bd215dcfae52aefc2cdb498b7

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
