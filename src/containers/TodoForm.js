//IMPORT PACKAGE MODULE
import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";

//IMPORT PROJECT MODULE
import { addTodoItem } from "../state/actionCreators";

class TodoForm extends Component
{
    state = {
        inputValue: "",
        id: uuidv1()
    };

    onChangeHandler = (e) =>
    {
        this.setState({ ...this.state, inputValue: e.target.value });
        e.preventDefault();
    }

    onKeyDownHandler = (e) =>
    {
        if (e.which == 13)
        {
            this.props.addItem(this.state.inputValue, this.state.id);
            this.setState({ ...this.state, inputValue: "", id: uuidv1() })
        }
    }

    render()
    {
        const { style } = this.props;
        return (
            <TextField
                onChange={this.onChangeHandler}
                onKeyDown={this.onKeyDownHandler}
                value={this.state.inputValue}
                className={style}
                id="todo_text"
                label="What do you need to do?"
            />
        );
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        addItem: (text, id) =>
        {
            dispatch(addTodoItem({ text, id, isCompleted: false }));
        }
    }
}
export default connect(null, mapDispatchToProps)(TodoForm);