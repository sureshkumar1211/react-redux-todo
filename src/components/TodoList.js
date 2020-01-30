//IMPORT PACKAGE MODULE
import React from "react";
import { connect } from "react-redux";
import { List, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

// IMPORT PROJECT MODULE
import TodoListItem from "./TodoListItem";

const useStyles = makeStyles(() => ({
    list: {
        borderBottom: "1px solid #e1e1e1"
    }
}));

const todoList = ({ list, type }) =>
{
    const styles = useStyles();
    let items = [];
    switch (type)
    {
        case "ACTIVE":
            items = list.filter((item) => !item.isCompleted);
            break;
        case "COMPLETED":
            items = list.filter((item) => item.isCompleted);
            break;
        default:
            items = list;
    }
    const todoLists = items.length ? items.map((item, index) =>
    {
        return <TodoListItem key={index} text={item.text} isTaskCompleted={item.isCompleted} id={item.id} />
    }) : null;
    return (
        <List className={items.length ? styles.list : ""}>
            {todoLists}
        </List>
    );
};

todoList.defaultProps = {
    list: []
};

todoList.propTypes = {
    list: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

const mapStateToProps = (state) =>
{
    return { list: state.todo.todoList, type: state.todo.action };
};

export default connect(mapStateToProps)(todoList);
