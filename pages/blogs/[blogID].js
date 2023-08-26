// import React from 'react'

// import { getStaticProps } from "."

const BlogID = ({blog}) => {
  return (
    <>
    <h2 key={blog.id}>{blog.id} - {blog.title}</h2>
    <p>{blog.body}</p>
    </>
  )
}

export default BlogID

export async function getStaticPaths(){
  return {
    paths:[
      {
        params:{
          blogID:'1'
        },
      },
      {
        params:{
          blogID:'2'
        },
      },
      {
        params:{
          blogID:'3'
        },
      },
    ],
    fallback:false
  }
}
export async function getStaticProps(context){
    const { params }= context
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogID}`)
    const data = await response.json()

    return {
        props:{
            blog:data
        }
    }
}
