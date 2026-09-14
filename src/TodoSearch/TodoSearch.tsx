import './TodoSearch.css';
import type { TodoSearchProps } from './TodoSearch.types';



function TodoSearch({ searchValue, setSearchValue }: TodoSearchProps) {

  return (
    <input 
     onChange={(event) => {
        setSearchValue(event.target.value);
      }}
     value={searchValue} 
    className="TodoSearch" placeholder="Buscar TODO"/>
  )
}
export { TodoSearch };