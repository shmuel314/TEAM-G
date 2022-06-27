import "./box.css"
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
function Box1(){
const button=[{ name:'Train Reading',icon:icon1},{name:'Train Focus',icon:icon2},{name:'Weekly Assessment',icon:icon3},{name:'Freestyle',icon:icon4}]
    // yishai
        return <> {button.map((v=>{console.log("efef")}))}
        <div className =" box  boxbehind" ></div>
    <div className ="box box1">
<div className ="icon1" ><img src={icon1} alt="book"  />  </div>
      
        
        <div className ="namebox">stresss
        
        </div>
         </div>
        
         
         
         
        </>
    
}


export default Box1