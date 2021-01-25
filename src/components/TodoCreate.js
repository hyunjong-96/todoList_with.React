import React,{useState} from 'react'
import styled,{css} from 'styled-components'
import {MdAdd} from 'react-icons/md'
import {TodoNextId,TodoDispatch} from '../TodoContext/TodoContext'
//할일을 등록할 수 있게 해주는 컴포넌트, TodoTemplate의 하단부에 초록색 원 버튼을 렌더링해주고,
//클릭하면 할 일을 입력 할 수 있는 폼이 생성됨.

const CirCleButton = styled.button`
    background : #38d9a9;
    &:hover{
        background : #63e6be;
    }
    &:active{
        background : #20c997;
    }
    width : 5rem;
    height: 5rem;

    //위치
    display: block;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:50%;
    bottom:0;
    transform : translate(-50%,50%);

    //모양
    border-radius:50%;
    border:none;
    outline:none;
    //z-index:5;

    display:flex;

    transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
    cursor:pointer;
`

const InsertFormPositioner = styled.div`
    //border:1px solid red;
    width:100%;
    /* bottom : 0;
    left:0;
    position : absolute; */
    
` 

const InsertForm = styled.form`
    background : #f8f9fa;
    padding : 2rem;
    padding-bottom:4rem;

    border-bottom-left-radius:1rem;
    border-bottom-right-radius:1rem;
    border-top : 1px solid #e9ecef;
`

const Input = styled.input`
    //위치
    padding : 1rem;

    //모양
    border : 1px solid #dee2e6;
    border-radius : 0.25rem;
    box-sizing : border-box;

    //크기
    width : 100%;
`

function TodoCreate(){
    const [open,setOpen] = useState(false)
    const [value,setValue] = useState('')
    const dispatch = TodoDispatch()
    const nextId = TodoNextId()
    const onToggle = () =>{
        setOpen(!open)
    }
    const onChange = (e) =>{
        setValue(e.target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch({
            type:'CREATE',
            todo:{
                id:nextId.current,
                text:value,
                done:false
            }
        })
        setValue('')
        setOpen(false)
        nextId.current+=1
    }
    return(
        <>
        {open && (
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    <Input autoFocus onChange={onChange} placeholder="할일을 입력후, Enter를 눌러주세요"/>
                </InsertForm>
            </InsertFormPositioner>
        )}
        <CirCleButton onClick={onToggle} open={open}>
            <MdAdd/>
        </CirCleButton>
        </>
    )
}

export default TodoCreate