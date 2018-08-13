import React, { Component } from 'react';
import './../App.css';
import moment from 'moment';

class Todo extends Component {

  render() {
    var {text,id,completed,createdAt,completedAt} =this.props;
    var complete=completed?"completed":'';
    var RenderDate = ()=>{
      var msg,timestamp='';
      if(completed){
        msg="Completed At";
        timestamp=completedAt;
      }else{
        msg="Created At";
        timestamp=createdAt;
      }
      var time=moment.unix(timestamp).format(" MMM Do YYYY @ h:mm a");
      return msg+time;
    };
  
    return (
      <div className={("row",complete)} onClick={()=>{ 
        this.props.isToggle(id);
        }}>
       <div className="mx-auto">
      <div className="card" style={{width:20+'em'}}>
      <div className="form-row p-3">
    <div className="col-sm-2">
      <input type="checkbox" ref={id} checked={completed} className="form-control mt-3"  />
    </div>
    <div className="col text-left">
    <span>{text}</span><br/>
    <span className="time" >{RenderDate()}</span>
    </div>
  </div>
      </div>
      </div>
      </div>
    
    );
  }
}

export default Todo;
