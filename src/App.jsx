import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./newTodoForm"
import { TodoList } from "./todoList"

export default function App() {
  const [todos, setTodos] = useState(()=> {
    const localData = localStorage.getItem("ITEMS")

    if(localData === null) return []

    return JSON.parse(localData)
  })

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
     setTodos((currentTodos) => {
          return [
            ...currentTodos,
            {
              id: crypto.randomUUID(),
              title,
              completed: false
            }
          ]
        })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id,){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  )
}