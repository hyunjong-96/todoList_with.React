import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return  {
                ...state,
                loading:true
            }
        case 'SUCCESS':
            return {
                ...state,
                loading:false,
                data:action.data
            }
        case 'ERROR':
            return {
                ...state,
                loading:false,
                error:action.error
            }
        default:
            throw new Error()
    }
}

function Users_Reducer(){
    const [state,dispatch] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    })
    const fetchUsers = async() =>{
        console.log('reducerUsers의 fetchUsers함수 호출!')
        dispatch({type:'LOADING'})
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type:'SUCCESS',
                data:response.data
            })
        }catch(err){
            dispatch({
                type:'ERROR',
                error:err
            })
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[])

    const {loading,data:users,error} = state //state.data를 users 키워드로 조회
    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러발생!</div>
    if(!users) return null

    return(
        <>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} ({user.username})
                </li>
            ))}
        </ul>
        </>
    )
}

export default Users_Reducer