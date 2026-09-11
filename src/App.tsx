import './App.css'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton }  from './CreateTodoButton' 
import { TodoItem } from './TodoItem'

function App() {

  const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
  ]

  return (
    <>
      <TodoCounter total={5}  completed={2}/>
      <TodoSearch/>
      <TodoList>
        {
          defaultTodos.map(todo => (
            <TodoItem key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
            />
          ))

        }   
      </TodoList>
      <CreateTodoButton/>
    </>  
  )
}



export default App;