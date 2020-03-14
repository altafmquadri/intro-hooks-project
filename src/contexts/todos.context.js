import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
    { id: 1, task: 'Mow the lawn with goats', completed: false },
    { id: 2, task: 'Release lady bugs into garden', completed: true }
]

export const TodosContext = createContext()

export const TodosProvider = props => {
    const todosStuff = useTodoState(defaultTodos)

    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}
