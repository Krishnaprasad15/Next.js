// import React from 'react'
import { useRouter } from "next/router"

const reviewProduct = () => {
    const router= useRouter()
    const {reviewID,productID}= router.query
  return (
    <h1>
      Review {reviewID} from product {productID}
    </h1>
  )
}

export default reviewProduct
