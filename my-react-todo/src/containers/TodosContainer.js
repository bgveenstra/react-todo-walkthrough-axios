// src/containers/TodosContainer.js
import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import Todo from '../components/Todo'

class TodosContainer extends Component {
  render(){
  	// check that TodoModel AJAX call gets todo data
  	TodoModel.all().then( (res) => {
      console.log(res);
    })
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
        <Todo
          key={"58e3c74c93075e0011489f04"}
          todo={{"_id":"58e3c74c93075e0011489f04","body":"Take a walk outside","priority":5,"completed":false,"__v":0}}/>
      </div>
    )
  }
}

export default TodosContainer
