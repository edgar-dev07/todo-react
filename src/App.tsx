import './App.css'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton }  from './CreateTodoButton' 
import { TodoItem } from './TodoItem'
import react from 'react';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
  ]

function App() {
   const [todos, setTodos] = react.useState(defaultTodos);
   const totalTodos = todos.length;
   const completedTodos = todos.filter(todo => todo.completed).length; 
    const [searchValue, setSearchValue] = react.useState('');

   const TodoFilter = todos.filter (todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
   }) 
  

  return (
    <>
      <TodoCounter total={totalTodos}  completed={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {
          TodoFilter.map(todo => (
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