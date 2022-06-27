import React, { useContext } from 'react'
import { pageNameContext } from '../../layout/Layout'
import Questions from "../Questions";





//group c- yehoshua++

export default function QuestionsLevel() {
  const pageInfo = useContext(pageNameContext)
  pageInfo.setPageName("Questions")
  return (
    <>
      <Questions />

    </>
  )
}

