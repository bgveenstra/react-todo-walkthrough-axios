// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditTodoForm extends Component {
  onInputChange(event) {
    console.log('changing a todo!')
  }
  render(){
    return (
      <div className='editTodoForm'>
        <form>
          <input onChange={event => this.onInputChange(event)}
            placeholder='Write updated todo here...'
            type='text'
            value='' />
          <button type='submit'>Update Todo!</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm