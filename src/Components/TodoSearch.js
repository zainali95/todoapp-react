import React, { Component } from 'react';
import './../App.css';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.searchval=React.createRef();
    this.iscomplete=React.createRef();
    this.handler=this.handler.bind(this);

  }
 
  handler(){
    var searchval=this.refs.searchVal.value;
    var iscomplete=this.refs.isComplete.checked;
    this.props.onSearch(searchval,iscomplete);
  }
  render() {
    return (
      <div className="row ">
      <div className="card col-md-4 mb-3 mx-auto">
      <div className="card-body ">
        <div className="row">
            <input type="input" placeholder="Search Todo" ref="searchVal" onChange={this.handler}  className="col-md-12" />
        </div>
        <div className="row mt-3">
       <input type="checkbox" ref="isComplete" onChange={this.handler}   /> <label className=" col-form-label" >Show completed Todos</label>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default TodoSearch;
