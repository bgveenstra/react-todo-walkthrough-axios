// src/components/TodoList.js
import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render(){
    let todos = this.props.todos.map( (todo) => {
      return (
        <Todo
          key={todo._id}
          todo={todo}/>
      )
    })
    return(
      <div className="todos">
        {todos}
      </div>
    )
  }
}

export default TodoList