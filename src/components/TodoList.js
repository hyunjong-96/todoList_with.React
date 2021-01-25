import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
//할일에 대한 정보가 들어있는 todos 배열을 내장함수map을 사용하여 여러개의 TodoItem컴포넌트를 렌더링해준다.
const ListBlock = styled.div`
    //border:1px solid red;
    flex : 1; //자신이 차지할 수 있는 영역을 꽉 채우도록 설정.
    margin : 0 1rem;
    padding : 1.2rem 1rem;
    padding-bottom : 3rem;
    overflow-y:auto;
`

function TodoList(){
    return(
        <ListBlock>
            <TodoItem text="프로젝트 생성하기" done={true}/>
            <TodoItem text="React 시작하기" done={true}/>
            <TodoItem text="포기하고싶은가?" done={false}/>
            <TodoItem text="배고픈가?" done={true}/>
            <TodoItem text="배고픈가?" done={true}/>
            <TodoItem text="배고픈가?" done={true}/>
            <TodoItem text="배고픈가?" done={true}/>
            <TodoItem text="배고픈가?" done={true}/>
        </ListBlock>
    )
}

export default TodoList