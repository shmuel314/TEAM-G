import styles from './style.module.css'
import TitleRead from '../../../components/common/TitleRead'
import SubmitBtn from '../../../components/common/SubmitBtn'
import examImg from './image/exam.jpg'
import { useEffect, useState } from 'react'

// Creator : Team A - Amos

function Page4() {
    //משתנה שמחזיר את רשימת המבחנים
    const [exam, setExam] = useState()

    // להביא מבחנים מהשרת ולשמור ברשימה
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => { setExam(data) })
    }, [])
    if (!exam) return 'Loading...'
    console.log(exam)


    return <>
        <div className="Page4" >
            {/* //Header - import whith props - "comprehensions" */}
            <div className="TitleRead">
                <TitleRead />
            </div>
            <div>
                <img className={styles.img} src={examImg} alt="" />
            </div>
            {/* //scrollbar
        //bottom button "done" - import whith props */}
            <div>
                <SubmitBtn />
            </div>


        </div>

    </>
}

export default Page4