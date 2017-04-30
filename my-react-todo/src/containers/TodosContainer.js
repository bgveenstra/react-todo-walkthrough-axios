// src/containers/TodosContainer.js
import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodoList from '../components/TodoList'

class TodosContainer extends Component {
  render(){
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
        <TodoList
          todos={
            [{"_id":"58e3c74c93075e0011489f02","body":"Wash the dishes","priority":4,"completed":false,"__v":0},{"_id":"58e3c74c93075e0011489f07","body":"Update resume with new skills","priority":2,"completed":false,"__v":0},{"_id":"58e3c74c93075e0011489f05","body":"Buy nutritious groceries for the week","priority":2,"completed":false,"__v":0}]
          } />
      </div>
    )
  }
}

export default TodosContainer