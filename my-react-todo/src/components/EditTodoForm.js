// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditTodoForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      updatedTodoBody: ''
    }
  }

  onInputChange(event) {
    console.log('changing a todo!')
    this.setState({
      updatedTodoBody: event.target.value
    })
  }

  render(){
    return (
      <div className='editTodoForm'>
        <form>
          <input onChange={event => this.onInputChange(event)}
            placeholder='Write updated todo here...'
            type='text'
            value={this.state.updatedTodoBody} />
          <button type='submit'>Update Todo!</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm