import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter'
import { TodoSearch } from './TodoSearch/TodoSearch'
import { TodoList } from './TodoList/TodoList'
import { CreateTodoButton }  from './CreateTodoButton/CreateTodoButton' 
import { TodoItem } from './TodoItem/TodoItem'
import type { Todo } from './todo.types';
import {useLocalStorage} from './useLocalStorage';
import react from 'react';



//const defaultTodos : Todo[] = [
  //  { text: 'Cortar cebolla', completed: true },
   // { text: 'Tomar el curso de intro a React', completed: false },
   // { text: 'Llorar con la llorona', completed: false },
 // ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); 

function App() {

   const [todos, saveItem] = useLocalStorage('TODOS_V1', [] as Todo[]);
   const totalTodos = todos.length;
   const completedTodos = todos.filter(todo => todo.completed).length; 
    const [searchValue, setSearchValue] = react.useState('');
   const TodoFilter = todos.filter (todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
   }) 
  

   const completeTodos = (todo : Todo )  => {
    const copyTodos = [...todos];
    const item = copyTodos.findIndex(t => t.text === todo.text);
    copyTodos[item].completed = true;
    saveItem(copyTodos);
    console.log(todos);
   }

   const deleteTodos = (todo : Todo )  => {
    const copyTodos = [...todos];
    const item = copyTodos.findIndex(t => t.text === todo.text);
    copyTodos.splice(item, 1);
    saveItem(copyTodos);
   }

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
                      onComplete={() => completeTodos(todo)}
                      onDelete={() => deleteTodos(todo)}
            />
          ))

        }   
      </TodoList>
      <CreateTodoButton/>
    </>  
  )
}



export default App;