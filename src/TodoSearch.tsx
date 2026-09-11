import './TodoSearch.css';

function TodoSearch() {
  return (
    <input 
     onChange={(event) => {
        console.log(event.target.value);
      }}
    className="TodoSearch" placeholder="Buscar TODO"/>
  )
}
export { TodoSearch };