// src/containers/TodosContainer.js
import React, {Component} from 'react'
import TodoModel from '../models/Todo'

class TodosContainer extends Component {
  render(){
  	// check that TodoModel AJAX call gets todo data
  	TodoModel.all().then( (res) => {
      console.log(res);
    })
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default TodosContainer
