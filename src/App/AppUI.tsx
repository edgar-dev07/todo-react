import React from 'react'   

import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { CreateTodoButton }  from '../CreateTodoButton/CreateTodoButton' 
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoContext } from '../TodoContext'


function AppUI() {

    const context = React.useContext(TodoContext);

    if (!context) {
        throw new Error('AppUI debe estar dentro de TodoProvider');
    }

   const {
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

        } = context;  

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

export { AppUI }

