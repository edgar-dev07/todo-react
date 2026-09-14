import './App.css'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton }  from './CreateTodoButton' 
import { TodoItem } from './TodoItem'
import react from 'react';


interface Todo {
  text: string;
  completed: boolean;
}

const defaultTodos : Todo[] = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
  ]

 localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); 

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos: Todo[] = [];

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

   const [todos, setTodos] = react.useState(parsedTodos);
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
    setTodos(copyTodos);
   }

   const deleteTodos = (todo : Todo )  => {
    const copyTodos = [...todos];
    const item = copyTodos.findIndex(t => t.text === todo.text);
    copyTodos.splice(item, 1);
    setTodos(copyTodos);
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