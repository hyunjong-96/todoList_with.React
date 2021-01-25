import React from 'react'
import styled from 'styled-components'
import {useTodoState} from '../TodoContext/TodoContext'
//오늘의 날짜와 요일을 보여주고, 앞으로 해야할 일이 몇개 남았는지 보여줌

const HeadBlock = styled.div`
    margin : 1rem;
    padding : 2rem 1rem;
    border-bottom : 2px solid #e9ecef;

    h1{
        margin : 0;
        font-size:1.5rem;
        color : #343a40;
    }
    .day{
        margin:4px;
        font-size : 20px;
        color : #868e96;
    }
    .tasks-left{
        color : #20c997;
        margin-top : 1rem;
        font-weight : bold;
        font-size:1.2rem;
    }
`

function TodoHead(){
    const todos = useTodoState()
    console.log('TodoHead의 todos : ',todos)
    return(
        <HeadBlock>
            <h1>2021년 1월 25일</h1>
            <div className="day">화요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </HeadBlock>
    )
}

export default TodoHead