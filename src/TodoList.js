import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import Todo from './Todo'
import { TodosContext } from './contexts/todos.context';

const TodoList = () => {

    const todos = useContext(TodosContext)
    return (
        todos.length ?
            <Paper>
                <List>
                    {todos.map((t, i) => (
                        <React.Fragment key={t.id}>
                            <Todo {...t}
                                key={t.id}
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