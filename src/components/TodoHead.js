import React from 'react'
import styled from 'styled-components'
import {TodoState} from '../TodoContext/TodoContext'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
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
    //undoTasks
    const todos = TodoState()
    const undoneTasks = todos.filter(todo=> !todo.done).length

    //날짜
    dayjs.locale('ko')
    const date = dayjs()
    const now = date.format('YYYY년 MM월 DD일')
    return(
        <HeadBlock>
            <h1>{now}</h1>
            <div className="day">{date.format('ddd')}요일</div>
            <div className="tasks-left">할 일 {undoneTasks}개 남음</div>
        </HeadBlock>
    )
}

export default TodoHead