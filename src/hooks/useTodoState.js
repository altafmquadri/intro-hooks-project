import {useState} from 'react'
import { v4 as uuid } from 'uuid'

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos)
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(t => t.id !== todoId)
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(t => {
                if (t.id === todoId) {
                    t.completed = !t.completed
                }
                return t
            })
            setTodos(updatedTodos)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(t => {
                if (t.id === todoId) {
                    t.task = newTask
                }
                return t
            })
            setTodos(updatedTodos)
        }
    }
}


