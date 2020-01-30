//IMPORT PACKAGE MODULE
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { ListItem, TextField, ListItemText, makeStyles, Checkbox, ListItemIcon } from "@material-ui/core";
import { Close, EditOutlined, Done } from "@material-ui/icons";
import PropTypes from "prop-types";

//IMPORT PROJECT MODULE
import { removeTodoItem, isCompleted, editTodoItem } from "../state/actionCreators";


const useStyles = makeStyles(() =>
    ({
        completed: {
            color: "grey",
            textDecoration: "line-through"
        }
    }));

const todoListItem = ({ text, id, isChecked, isTaskCompleted, editItem, removeItem }) =>
{
    const styles = useStyles(),
        [state, setState] = useState({
            isEditable: false,
            text
        }),
        onChangeHandler = (e) =>
        {
            setState({ ...state, text: e.target.value });
        },
        editHandler = (e) =>
        {
            if (e.which == 13 || e == "done")
            {
                editItem(id, state.text);
                setState({ ...state, isEditable: false });
            }
        },
        taskCompletedStyle = isTaskCompleted ? styles.completed + " c-pointer list-checkbox-section" : "list-checkbox-section c-pointer";
    return (
        <ListItem
            id={id}>
            {state.isEditable ?
                <TextField
                    className='mr-auto list__input'
                    value={state.text}
                    onKeyDown={editHandler}
                    onChange={onChangeHandler}
                    label="Edit"
                    variant="outlined"
                /> :
                <div className={taskCompletedStyle} onClick={() => isChecked(id, !isTaskCompleted)}>
                    <Fragment>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={isTaskCompleted}
                            />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </Fragment>
                </div>
            }
            {!isTaskCompleted &&
                <ListItemIcon className='remove-list'>
                    {state.isEditable ?
                        <Done className="c-pointer icon-success" onClick={() => editHandler("done")} /> :
                        <EditOutlined className="c-pointer icon-primary" onClick={() => setState({ ...state, isEditable: true })} />
                    }
                </ListItemIcon>
            }
            <ListItemIcon className='remove-list'>
                <Close className="c-pointer icon-danger" edge="end" onClick={() => removeItem(id)} />
            </ListItemIcon>
        </ListItem>
    );
};

todoListItem.defaultProps = {
    text: "string",
    id: "0"
};

todoListItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) =>
    {
        dispatch(removeTodoItem(id));
    },
    editItem: (id, text) =>
    {
        dispatch(editTodoItem(id, text));
    },
    isChecked: (id, isChecked) =>
    {
        dispatch(isCompleted(id, isChecked));
    }
});
export default connect(null, mapDispatchToProps)(todoListItem);