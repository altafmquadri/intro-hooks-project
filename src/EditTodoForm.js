import React from 'react';
import useInputState from './hooks/useInputState'
import TextField from '@material-ui/core/TextField'

const EditTodoFrom = ({ id, task, editTodo, toggleEditForm }) => {
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