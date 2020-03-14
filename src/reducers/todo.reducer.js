import { v4 as uuid } from 'uuid'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: uuid(), task: action.task, completed: false }]
        case 'REMOVE':
            return state.filter(t => t.id !== action.id)
        case 'TOGGLE':
            return state.map(t => {
                if (t.id === action.id) {
                    t.completed = !t.completed
                }
                return t
            })
        case 'EDIT':
            return state.map(t => {
                if (t.id === action.id) {
                    t.task = action.newTask
                }
                return t
            })
        default:
            return state
    }
}

export default reducer

