import { useContext, useState } from 'react';
import { pageNameContext } from '../Layout';
import nav from './img/nav-icon.png';
import photoPic from './img/userPhoto.png';
import "./header.css"

//group c- yoav & yehoshua

export default function Header() {
   const [pageName, setPageName] = useContext(pageNameContext) //assuming context is in use
      setPageName("default page Name ")// default page name so you see it
   
   return (
      <div className='header'>
         <div className='left'>
            <img src={nav} alt="navbar"></img>
         </div>

         <div className='mid'>
            {pageName}
         </div>

         <div className='right'>
            <img src={photoPic} alt="User Name" />
         </div>
      </div>
   )
}