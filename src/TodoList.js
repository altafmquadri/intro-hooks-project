import React from 'react';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import Todo from './Todo'

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {

    return (
        todos.length ?
            <Paper>
                <List>
                    {todos.map((t, i) => (
                        <React.Fragment key={t.id}>
                            <Todo {...t}
                                key={t.id}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
            : null
    )

}

export default TodoList;