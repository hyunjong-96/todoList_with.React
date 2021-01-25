import React from 'react'
import styled,{css} from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md'
//할 일에 대한 정보를 렌더링해주는 컴포넌트. 좌측에 있는 원을 누르면 할일의 완료 여부를 toggle할 수 있다.
//할 일이 완료되면 좌측에 체크가 나타나고 텍스트의 색상이 연해짐
//마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제된다.

const TodoItemBlock = styled.div`
    display:flex;
    align-items:center;
    color : #dee2e6;
    font-size : 1.5rem;

    &:hover{
        
    }

    &+&{
        margin-top:1.2rem;
    }
`
const CheckCircle = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:1rem;
    cursor : pointer;

    //모양
    border:1px solid #ced4da;
    border-radius:1rem;

    //크기
    width : 2rem;
    height : 2rem;


    ${props=>
        props.done &&
        css`
            border:1px solid #38d9a9;
            color : #38d9a9;
        `
    }
`
const Text = styled.div`
    color : #ced4da;

    ${({done})=>
        done &&
        css`
            color : #495057;
        `
    }
`

const Remove = styled.div`
    cursor: pointer;
    &:hover{
        color: #ff6b6b; 
    }
`

function TodoItem({id,done,text}){
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>
                {text}
            </Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem