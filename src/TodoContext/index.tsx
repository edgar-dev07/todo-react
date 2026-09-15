import React, { useState } from "react";
import {useLocalStorage} from "./useLocalStorage";
import type { Todo } from "./todo.types";
import type { TodoContextProps, TodoProviderProps } from "./TodoContext.types";

const TodoContext = React.createContext<TodoContextProps | undefined>(undefined);

function TodoProvider({children}: TodoProviderProps){
  const {
    Item:todos,
    saveItem:saveTodos ,
    error,
    loading
      }=useLocalStorage('TODOS_V1',[]);

//   const [openModal,setOpenModal]=React.useState(false);


  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length; 
  const [searchValue, setSearchValue] = useState('');
  const TodoFilter = todos.filter (todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
   }) 

    const completeTodos = (todo : Todo )  => {
       const copyTodos = [...todos];
       const item = copyTodos.findIndex(t => t.text === todo.text);
       copyTodos[item].completed = true;
       saveTodos(copyTodos);
       console.log(todos);
      }
   
  
    const deleteTodos = (todo : Todo )  => {
        const copyTodos = [...todos];
        const item = copyTodos.findIndex(t => t.text === todo.text);
        copyTodos.splice(item, 1);
        saveTodos(copyTodos);
        }


 return(
        <TodoContext.Provider value=
        {{
            totalTodos,
            completedTodos,
            // concluido,
            searchValue,
            setSearchValue,
            TodoFilter,
            completeTodos,
            deleteTodos,
            loading,
            error
            //openModal,
            //setOpenModal,
            // addTodo
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};