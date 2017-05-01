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
  static delete(todo) {
    let url = `https://super-crud.herokuapp.com/todos/${todo._id}`
    let request = axios.delete(url)
    return request
  }
  static update(todoBody, id) {
    let url = `https://super-crud.herokuapp.com/todos/${id}`
    let request = axios.put(url, {body: todoBody})
    return request
  }
}

export default TodoModel