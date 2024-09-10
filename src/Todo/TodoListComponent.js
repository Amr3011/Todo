import TodoitemComponent from "./TodoitemComponent";

const TodoListComponent = (props) => {

    const {title , todoList, deleteTodo, changeStatus, setTodo} = props ;

  return (
    <div className="row">
        <h3 className="mt-4">{title}</h3>
            <ul className="list-group">
                {todoList.map(item => (
                <TodoitemComponent setTodo={setTodo} changeStatus={changeStatus} deleteTodo ={deleteTodo} key={item.id} todo={item}/>
                ))}
            </ul>
    </div>
  )
}

export default TodoListComponent