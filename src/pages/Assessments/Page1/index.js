// import styles from './style.module.css'
import './style.css'
import FooterStart from '../../../components/common/FooterStart';
import Frame from './Frame.jpg'
import student from './student.jpg'



// Creator : Team A - Daniel
function Page1(){
    return <div>
        
    Header prop="assessments Test"
    <img className='img-page1' src={student} alt=''/>
    <img src={Frame} alt=''/>
    

    {/* <FooterStart title="START" explanation="Scelerisque enim purus ipsum at amet, et mauris, est. Quisque interdum sollicitudin ultrices pellentesque a imperdiet sapien."
    img="Frame.png"/> */}
       
    </div>
}


export default Page1;