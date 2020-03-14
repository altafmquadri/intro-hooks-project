import React, { useContext } from 'react';
import useInputState from './hooks/useInputState'
import TextField from '@material-ui/core/TextField'
import { TodosContext } from './contexts/todos.context';

const EditTodoFrom = ({ id, task, toggleEditForm }) => {
    const { editTodo } = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={e => {
            e.preventDefault()
            editTodo(id, value)
            reset()
            toggleEditForm()
        }}
            style={{ marginLeft: '1rem', width: '50%' }}
        >
            <TextField
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
                margin='normal' />
        </form>
    );
}

export default EditTodoFrom;