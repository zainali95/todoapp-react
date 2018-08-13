import $ from 'jquery/dist/jquery';

    export function setTodos (todos){
        
        if($.isArray(todos)){
          
            localStorage.setItem('todos',JSON.stringify(todos));
            
        }
        
        return todos;
    }
    export function getTodos(){
        var stringtodo=localStorage.getItem('todos');
        var todos=[];
        try{
            todos=JSON.parse(stringtodo);
            
        }catch(e){
            
        }

         return $.isArray(todos)? todos :[];

        

    }
    export function filterTodos(todos,searchval='',isComplete){

        var filterTodo=todos;
        filterTodo=filterTodo.filter((todo)=>{
            return !todo.completed || isComplete;
        });
        filterTodo=filterTodo.filter((todo)=>{
            var text=todo.text.toLowerCase();
   
            return searchval.length===0 || text.indexOf(searchval)>-1;
                
        
        });

        filterTodo=filterTodo.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1;
            }else if(a.completed && !b.completed){
                return 1;
            }else{
                return 0;
            }
        });
        return filterTodo;

    }

