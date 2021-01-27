import React,{useState} from 'react'
import {useUsersDispatch,useUsersState,getUsers} from '../Contexts/UsersContext'
import User from './User'

function Users_Context(){
    const [userId,setUserId] = useState(null)
    const dispatch = useUsersDispatch()
    const state = useUsersState()

    const {data:users, loading, error} = state.users
    const fetchUsers = () =>{
        getUsers(dispatch)
    }

    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러 발생!!!</div>
    if(!users) return <button onClick={fetchUsers}>불러오기</button>
    
    return(
        <>
        <ul>
            {users.map((user)=>(
                <li key={user.id} onClick={()=>setUserId(user.id)} style={{cursor:'pointer'}}>
                    {user.name} ({user.username})
                </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        {userId && <User id={userId}/>}
        </>
    )
}

export default Users_Context