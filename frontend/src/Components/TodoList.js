import React, { Component } from 'react';
import './../App.css';
import Todo from './Todo';

class TodoList extends Component {
 
  render() {
    var {todos} =this.props;
    
    var todoItems = [];
    if(todos.length===0){
            todoItems= (<p class="nothing">Nothing Todo</p>);
          }else{
            todoItems=todos.map((todo) =>
           <Todo key={todo.id} {...todo} isToggle={this.props.isToggle}/>
           );
          }

    return (
      <div className="row">
      <div className="TodoList mx-auto col-md-4">
      {todoItems}

      </div>
      </div>

    );}}
  


export default TodoList;
