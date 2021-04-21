import React from 'react'
import Todo from './Todo'
function TodoList(props)
{
    return(
        <div className="todo-container">
        <ul className="todo-list">
        {props.todos.map((todo)=>(
              <Todo
              todos={props.todos}
              todo={todo}
              setTodos={props.setTodos}
               key={todo.id}
               text={todo.text}
                id={todo.id}/>
        ))}
        </ul>
         
      </div>
    )
}
export default TodoList