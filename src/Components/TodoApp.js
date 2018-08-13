import React, { Component } from 'react';
import './../App.css';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import AddTodo from './AddTodo';
import uuid from 'uuid';
import moment from 'moment'
import {getTodos,setTodos,filterTodos} from './../Api/TodoApi';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.iscomplete=false;
        this.todo=this.todo.bind(this);
        this.togglehandler=this.togglehandler.bind(this);
        this.state={todos:getTodos()};
        this.handler = this.handler.bind(this);
  }

  componentDidUpdate(){
   setTodos(this.state.todos);
  }
  togglehandler(id){
   var updatedtodo=this.state.todos.map((todo)=>{
     if(todo.id===id){
      todo.completed=!todo.completed;
      todo.completedAt=todo.completed?moment.unix():undefined;
     }
     return todo;
   });
   this.setState({todos:updatedtodo});
  }
  handler(searchval,iscomplete){
    
   this.setState({
    searchval:searchval,
    iscomplete:iscomplete
   });
  
  }
  todo(todo){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text:todo,
          completed:false,
          createdAt:moment().unix(),
          completedAt:undefined
        }
      ]
    });
    // alert(todo);
  }
  render() {
    var {searchval,iscomplete,todos}=this.state;
    var filter=filterTodos(todos,searchval,iscomplete);
    return (
      <div className="TodoApp">
      <div className="container my-5">

          <TodoSearch onSearch={this.handler}/>
          <TodoList todos={filter} isToggle={this.togglehandler} />
          <AddTodo newTodo={this.todo} />
  
          </div>
      </div>
    );
  }
}

export default TodoApp;
