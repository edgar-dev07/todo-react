import './TodoList.css';

function TodoList(props: { children: React.ReactNode }) {
  return (
      <ul>
        {props.children}
      </ul>
  )
}

export { TodoList };