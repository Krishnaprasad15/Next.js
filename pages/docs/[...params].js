// import React from 'react'
import { useRouter } from "next/router"

const paramsDoc = () => {
    const router= useRouter()
    const {params}= router.query
    console.log(params)
  return (
    <h1>
      Document page
    </h1>
  )
}

export default paramsDoc
