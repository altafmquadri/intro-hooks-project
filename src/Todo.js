import React, { useContext, memo } from 'react';
import EditTodoFrom from './EditTodoForm'
import useToggleState from './hooks/useToggleState'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { DispatchContext } from './contexts/todos.context';


const Todo = ({ id, task, completed, }) => {
    const dispatch = useContext(DispatchContext)
    const [isEditing, toggle] = useToggleState()
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? <EditTodoFrom
                id={id}
                task={task}
                toggleEditForm={toggle} /> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id })} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => dispatch({ type: 'REMOVE', id })}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem >
    );
}

export default memo(Todo);