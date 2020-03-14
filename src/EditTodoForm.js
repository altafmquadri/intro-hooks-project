import React, { useContext } from 'react';
import useInputState from './hooks/useInputState'
import TextField from '@material-ui/core/TextField'
import { TodosContext } from './contexts/todos.context';

const EditTodoFrom = ({ id, task, toggleEditForm }) => {
    const { dispatch } = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={e => {
            e.preventDefault()
            dispatch({ type: 'EDIT', id, newTask: value })
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