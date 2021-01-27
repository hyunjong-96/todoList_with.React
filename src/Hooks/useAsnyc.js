import {useReducer,useEffect, useCallback} from 'react'

function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return {
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
    }
}

function useAsync(callback,deps=[],skip=false){ //callback:API요청을 시작하는 함수, deps: useEffect의 deps로 설정됨.
    const [state,dispatch] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    })

    const fetchData = async() =>{
        dispatch({type:'LOADING'})
        try{
            const data = await callback()
            dispatch({type:'SUCCESS',data})
        }catch(err){
            dispatch({type:'ERROR',error:err})
        }
    }

    useEffect(()=>{
        if(skip) return
        fetchData()
    },deps)
    return [state,fetchData]
}

export default useAsync