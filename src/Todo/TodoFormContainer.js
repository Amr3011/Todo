
const TodoFormContainer = (props) => {
  const {todoItem , setTodoItem , submitForm} =props ;
  
  const changeinput = (inputName, value) =>{
    
    if(inputName === "todo-title"){
      setTodoItem({...todoItem , title:value});
    }else if(inputName === "todo-dueDate"){
      setTodoItem({...todoItem , dueDate:value});
    }

  }
  const submitHandler = (e) =>{
    e.preventDefault();
    submitForm();
  }

  return (
    <div className="row">
            <form onSubmit={submitHandler}>
              <div>
                <label htmlFor="todo-name">Todo Title</label>
                <input required onChange={(e)=> changeinput("todo-title", e.target.value) } value={todoItem.title} className="form-control" placeholder="Enter TO-do Text" type="text" id = "todo-name" name="todo-name"/>
              </div>
              <div>
                <label htmlFor="todo-name">Todo Due Date</label>
                <input  required onChange={(e)=> changeinput("todo-dueDate", e.target.value)} value={todoItem.dueDate} className="form-control" type="date" id = "todo-due-date" name="todo-due-date"/>
              </div>
              <div className="d-grid my-4">
                <button type="submit" className="btn btn-primary" >Add Todo</button>
              </div>
            </form>
        </div>
  )
}

export default TodoFormContainer;