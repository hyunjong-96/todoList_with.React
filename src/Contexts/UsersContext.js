import React,{useReducer,createContext,useContext} from 'react'
import axios from 'axios'
import createAsyncDispatcher from '../Utils/asyncActionUtils'
import * as api from '../api/UserApi'

const initialState = {
    users: {
      loading: false,
      data: null,
      error: null
    },
    user: {
      loading: false,
      data: null,
      error: null
    }
  };

const loadingState={
    loading:true,
    data:null,
    error:null
}

const success = (data)=>({
    loading:false,
    data,
    error:null
})

const error = (error)=>({
    loading:false,
    data:null,
    error:error
})

function userReducer(state,active){
    switch(active.type){
        case 'GET_USERS':
            return{
                ...state,
                users: loadingState
            }
        case 'GET_USERS_SUCCESS':
            return{
                ...state,
                users: success(active.data)
            }
        case 'GET_USERS_ERROR':
            return{
                ...state,
                users: error(active.error)
            }
            case 'GET_USER':
            return{
                ...state,
                user: loadingState
            }
        case 'GET_USER_SUCCESS':
            return{
                ...state,
                user: success(active.data)
            }
        case 'GET_USER_ERROR':
            return{
                ...state,
                user: error(active.error)
            }
        default:
            throw new Error(`Unhandled action type : ${active.type}`)
    }
}

const UsersStateContext = createContext(null)
const UsersDispatchContext = createContext(null)

export function UsersProvider({children}){
    const [state,dispatch] = useReducer(userReducer,initialState)
    return(
        <UsersDispatchContext.Provider value={dispatch}>
            <UsersStateContext.Provider value={state}>
                {children}
            </UsersStateContext.Provider>
        </UsersDispatchContext.Provider>
    )
}

export function useUsersDispatch(){
    const dispatch = useContext(UsersDispatchContext)
    if(!dispatch){
        throw new Error('Cannot find UsersDispatchProvider')
    }
    return dispatch
}

export function useUsersState(){
    const state = useContext(UsersStateContext)
    if(!state){
        throw new Error('Cannot find UsersStateProvider')
    }
    return state
}

// export async function getUsers(dispatch){
//     dispatch({type:'GET_USERS'})
//     try{
//         const response = await axios.get(
//             'https://jsonplaceholder.typicode.com/users'
//         )
//         dispatch({type:'GET_USERS_SUCCESS',data:response.data})
//     }catch(error){
//         dispatch({type:'GET_USERS_ERROR',error:error})
//     }
// }
export const getUsers = createAsyncDispatcher('GET_USERS',api.getUsers)
// export async function getUser(dispatch,id){
//     dispatch({type:'GET_USER'})
//     try{
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/users/${id}`
//         )
//         dispatch({type:'GET_USER_SUCCESS',data:response.data})
//     }catch(error){
//         dispatch({type:'GET_USER_ERROR',error:error})
//     }
// }
export const getUser = createAsyncDispatcher('GET_USER',api.getUser)