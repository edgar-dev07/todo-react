import './TodoItem.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon';
import type { TodoItemProps }  from './TodoItem.types' 


function TodoItem({ text, completed, onComplete, onDelete }:TodoItemProps) {
  return (
    <li className="TodoItem">
        
        {
        /*<span
            className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            onClick={onComplete}    

        >V</span> */}

            <CompleteIcon
                onComplete={onComplete}
                completed={completed}
            />
        <p
            className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
        >{text} </p> 
        
        <DeleteIcon
            onDelete={onDelete}
            />
        {/*
        <span className="Icon Icon-delete"
            onClick={onDelete}
        >X</span>*/ }
        
    </li>
  )
}

export  {TodoItem};