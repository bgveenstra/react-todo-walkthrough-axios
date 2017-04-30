// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditTodoForm extends Component {
  render(){
    return (
      <div className='editTodoForm'>
        <form>
          <input
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