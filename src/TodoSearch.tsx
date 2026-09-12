import './TodoSearch.css';
import react from 'react';

function TodoSearch() {

  const [searchValue, setSearchValue] = react.useState('');

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