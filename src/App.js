import styled,{createGlobalStyle} from 'styled-components'
import {TodoProvider} from './TodoContext/TodoContext'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import Users from './components/Users'
import Users_Reducer from './components/Users_Reducer'
import Users_Hook from './components/Users_Hook'
import Users_Context from './components/Users_Context'
import {UsersProvider} from './Contexts/UsersContext'

const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }
`

function App() {
  // return (
  //   <TodoProvider>
  //   <GlobalStyle/>
  //     <TodoTemplate>
  //       <TodoHead/>
  //       <TodoList/>
  //       <TodoCreate/>
  //     </TodoTemplate>
  //   </TodoProvider>
  // );
  return (
    <>
  {/* <Users/>
  <Users_Reducer/>  
  <Users_Hook/> */}
  <UsersProvider>
    <Users_Context/>
  </UsersProvider>
  </>
    )
}

export default App;
