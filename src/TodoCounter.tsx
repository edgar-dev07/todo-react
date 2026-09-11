import './TodoCounter.css';
import type { TodoCounterProps } from './TodoCounter.types';

function TodoCounter({ total, completed }: TodoCounterProps) {
  return (
    <h1 
        className="TodoCounter"
        
        >
            Has completado {completed} de {total} TODOs</h1>
  )
}

export { TodoCounter };