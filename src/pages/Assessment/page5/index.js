import React from 'react'
import styles from "./style.module.css";
import QuestionBoard from '../../../components/Common/QuestionBoard'
import SubmitBtn from '../../../components/Common/SubmitBtn'


export default function Page5() {
    const arr = [1,2,3,4]
    return (
        <>
            <ul className={styles.questions}>
                {arr.map(() => {
                    return (
                        <div style={{position:'relative',gap:'50px',height:'80%'}}>
                            <li><QuestionBoard /></li>
                            {/* <br/> */}
                        </div>
                    )
                })}
            </ul>

            <SubmitBtn />
        </>
    )
}
