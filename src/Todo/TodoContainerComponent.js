import TodoFormContainer from "./TodoFormContainer";
import TodoListComponent from "./TodoListComponent";

import React, { useState } from 'react';

const TODO_DUMMY_DATA = [];

const TODO_INITAL_VALUE = { id :0, title: "", dueDate:"",completed : false}


const TodoContainerComponent = () => {

  const [todoList, setTodoList] = useState(TODO_DUMMY_DATA);
  const [todoObject, setTodoObject] = useState(TODO_INITAL_VALUE);

  const generateNextId = () => {
    let maxId =0;
    for(let i =0 ; i <todoList.length; i++){
      if(todoList[i].id > maxId){
        maxId = todoList[i].id;
    }
  }
  return ++maxId;
}

  const submitTodoForm = () => {
    if(todoObject.id !==0){
      const modifiedTodoList = todoList.map((item) => {
        if(item.id === todoObject.id){
          item.title = todoObject.title;
          item.dueDate = todoObject.dueDate;
        }
        return item;
      }); 
      setTodoList(modifiedTodoList);
    }else{
      setTodoList([...todoList,{ ...todoObject, id : generateNextId()}]);

    }
    setTodoObject(TODO_INITAL_VALUE);
  }


  const deleteTodoHandler = (todo) => {
    const modifiedTodoList = todoList.filter((item) => item.id !== todo.id);
    setTodoList(modifiedTodoList);
  }

  const changeTodoStatusHandler = (todo) => {
    const modifiedTodoList = todoList.map((item) => {
      if(item.id === todo.id){
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoList(modifiedTodoList);

  }
  return (
    <div className="container">

        <TodoFormContainer submitForm={submitTodoForm} todoItem={todoObject} setTodoItem={setTodoObject}/>    

        <TodoListComponent setTodo={setTodoObject} changeStatus={changeTodoStatusHandler} deleteTodo = {deleteTodoHandler} title ="Pending Tasks" todoList = {todoList.filter(item => !item.completed)}/>
        <TodoListComponent setTodo={setTodoObject} changeStatus={changeTodoStatusHandler} deleteTodo = {deleteTodoHandler} title ="Completed Tasks" todoList = {todoList.filter(item =>item.completed)}/>

    </div>
  )
}

export default TodoContainerComponent;
