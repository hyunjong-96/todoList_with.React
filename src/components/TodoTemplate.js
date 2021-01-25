import React from 'react'
import styled from 'styled-components'
//우리가 만들 todoList의 레이아웃을 설정하는 컴포넌트
//페이지의 중앙에 그림자가 적용된 흰색 박스를 보여줌.
const TemplateBlock=styled.div`
    display:flex;
    border-radius: 16px;
    flex-direction : column;
    position : relative;

    margin : 0 auto;
    margin-top : 96px;

    width : 480px;
    height : 700px;

    background:white;
    box-shadow : 0 0 8px 0 rgba(0,0,0,0.04);
`

function TodoTemplate({children}){
    return(
        <TemplateBlock>
            {children}
        </TemplateBlock>
    )
}

export default TodoTemplate