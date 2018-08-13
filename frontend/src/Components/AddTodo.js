import React, { Component } from 'react';
import './../App.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.todoText=React.createRef();
    this.clickhandler = this.clickhandler.bind(this);
   
  }
  clickhandler(){
     var todoText = this.refs.todoText.value.toLowerCase();
     this.props.newTodo(todoText);  
  }
  render() {
    return (
      <div className="row">
        <div className="card col-md-4  mx-auto mt-3 ">
      <div className="card-body ">
         <div className="row">
         <input type="input" ref="todoText" placeholder="Add Todo" className="col-md-12" />
         </div>
         <div className="row">
         <button className="btn btn-primary col-md-12 mt-2" onClick={this.clickhandler}>Add</button>
         </div>
      </div>
      </div>
      </div>
    );
  }
}

export default AddTodo;
