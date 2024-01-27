// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props

  const {id, title} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <div>
      <li className="list-container">
        <p className="name">{title}</p>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
