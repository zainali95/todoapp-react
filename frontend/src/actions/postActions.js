import {ADD_TODO,FETCH_TODO }from './types';
import {getTodos,setTodos,filterTodos} from './../Api/TodoApi';
// var getTodos=getTodos();
export function fetchTodo(){
    return function(dispatch){
        type:FETCH_TODO ,
        payload : getTodos()
    };
}