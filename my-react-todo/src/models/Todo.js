import axios from 'axios'

class TodoModel {
  static all(){
    let request = axios.get("https://super-crud.herokuapp.com/todos")
    return request
  }
  static create(todo) {
    let request = axios.post("https://super-crud.herokuapp.com/todos", todo)
    return request
  }
  static delete(todo){
    let request = axios.delete(`https://super-crud.herokuapp.com/todos/${todo._id}`)
    return request
  }
}

export default TodoModel