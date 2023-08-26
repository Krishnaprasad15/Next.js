import Link from "next/link"

const Home=()=>{
    return (
        <>
        <h1>
            Home page
        </h1>
        <Link href='/blogs'>
            Blogs
        </Link>
        </>
    )
}
export default Home