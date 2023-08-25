import Link from "next/link"
import { useRouter } from "next/router"
const Home= ()=>{
    const router = useRouter()
    const handleClick=()=>{
        console.log('Placing order')
        router.push('/product')
    }
    return (
        <>
        <h1>Home page</h1>
        <Link href='/blog' >
         Click here for blogs
        </Link>
        <br/>
        <Link href='/product'>
        Click here for products
        </Link>
        <br/>
        <button onClick={handleClick}>
            Place order!
        </button>
        </>
    )
}
export default Home