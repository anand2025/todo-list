import "./listItem.css"
const ListItem = ({text, deleteTodo, isChecked, toggleChecked}) => {
  return (
    <div className="todo">
        <div className={`${isChecked ? "todo_radio" : "todo_radio_unchecked" }`} onClick={toggleChecked}>
            {isChecked}
        </div>

        <div className={` ${isChecked ? "todo_text_checked" : "todo_text"}`}>
            {text}
        </div>

        <div className="todo_delete" onClick={deleteTodo}>
            <h4>❌</h4>
        </div>
    </div>
  )
}

export default ListItem