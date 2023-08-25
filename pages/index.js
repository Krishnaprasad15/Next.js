import Link from "next/link"

const Home= ()=>{
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
        </>
    )
}
export default Home