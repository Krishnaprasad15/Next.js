import { useRouter } from "next/router"

const productDetails = () => {
    const router= useRouter()
    const productID= router.query.productID
  return (
    <h1>
      Product {productID} details
    </h1>
  )
}

export default productDetails
