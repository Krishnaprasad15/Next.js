import User from "../components/user"

const users = ({users}) => {
  return (
    <>
    <h1>
      List of users
    </h1>
    {
        users.map(user=>
            (
                <div key={user.id}>
                    <User user={user}/>
                    {/* {user.name} */}
                </div>
            )
        )
    }
    </>
  )
}

export default users

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props:{
            users:data,
        },
    }
}
