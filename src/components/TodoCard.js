//IMPORT PACKAGE MODULE
import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

//IMPORT PROJECT MODULE
import TodoForm from "../containers/TodoForm";
import TodoList from "./TodoList";
import TodoControls from '../containers/TodoControls';

const useStyles = makeStyles(() => ({
    card: {
        display: "table",
        margin: "20px auto 0 auto",
        minWidth: "600px"
    },
    fullWidth: {
        width: "100%"
    }
}))

const todoCard = () =>
{
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <TodoForm style={classes.fullWidth} />
                <TodoList />
                <TodoControls />
            </CardContent>
        </Card>
    );
}

export default todoCard;
