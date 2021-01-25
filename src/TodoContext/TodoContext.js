import React,{useReducer,createContext, useContext, useRef} from 'react'

const initialTodos=[
    {
        id:1,
        text:'프로젝트 생성하기',
        done:true
    },
    {
        id:2,
        text:'컴포넌트 스타일링하기',
        done:true
    },
    {
        id:3,
        text:'Context만들기',
        done:false
    },
    {
        id:4,
        text:'기능 구현하기',
        done:false
    },
    {
        id:5,
        text:'기능 구현하기2',
        done:false
    }
]

function todoReducer(state,action){
    switch(action.type){
        case 'CREATE':
            return [...state,action.todo]
        case 'TOGGLE':
            return state.map(todo => (
                todo.id === action.id ? {...todo, done:!todo.done} : todo
            ))
        case 'REMOVE':
            return state.filter(todo => (
                todo.id !== action.id
            ))
        default:
            throw new Error(`unHandled action type: ${action.type}`)
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
//두개의 context를 만들어주는 이유는
//dispatch만 필요한 컴포넌트에서 불필요한 랜더링을 방지할수 있기 떄문이다.

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer,initialTodos);
    const nextId = useRef(6)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function TodoState(){
    const context = useContext(TodoStateContext)
    if(!context){
        throw new Error('Cannot find TodoProvider(state)')  //해당 hook들을 사용하기 위해서 TodoProvider컴포넌트 내부에 렌더링이 되어있지않다면 에러발생
    }
    return context;
}
export function TodoDispatch(){
    const context = useContext(TodoDispatchContext)
    if(!context){
        throw new Error('cannot find TOdoProvider(dispatch)')
    }
    return context
}
//두개의 context를 사용하는 커스텀 Hook을 만들어준다.
export function TodoNextId(){
    const context = useContext(TodoNextIdContext)
    if(!context){
        throw new Error('cannot find TodoProvider(nextId')
    }
    return context
}