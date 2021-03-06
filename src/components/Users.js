import React, {useState,useEffect,useReducer} from 'react'
import axios from 'axios'

function Users(){
    const [users,setUsers] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUsers = async()=>{
        console.log('패치함수 호출!')
        try{
            setError(null)
            setUsers(null)
            setLoading(true)

            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        }catch(err){
            setError(err)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생</div>
    if(!users) return null
    return(
        <>
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    {user.name} ({user.username})
                </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )
}

export default Users