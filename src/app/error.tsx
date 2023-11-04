'use client'

import { useEffect } from "react"

//에러 컴포넌트는 반드시 클라이언트 컴포넌트여야한다.

type Props = {
  error: Error
  reset: () => void
}

export default function Error({error, reset}: Props) {
  useEffect(()=>{
    console.log('error is ', error.message)
  }, [])
  return (<><h1>Error 페이지</h1><button onClick={()=>{reset()}}>새로고침</button></>)
}