import './TodoItem.css'
import type { TodoItemProps }  from './TodoItem.types' 

function TodoItem({ text, completed }:TodoItemProps) {
  return (
    <li><span>V</span> <p>{text} {completed}</p> <span>X</span> </li>
  )
}

export  {TodoItem};