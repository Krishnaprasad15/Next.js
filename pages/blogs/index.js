// import React from 'react'

import Link from "next/link"

const Blogs = ({posts}) => {
  return (
    <>
    <h1>List of Blogs</h1>
    {
        posts.map(post=>(
            <div key={post.id}>
                <Link href={`blogs/${post.id}`}>
                {post.id} - {post.title}
                </Link>
            </div>
        ))
    }
    </>
  )
}

export default Blogs

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    return {
        props:{
            posts:data
        }
    }
}
