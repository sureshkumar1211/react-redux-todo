//IMPORT PACKAGE MODULE
import React, { Component } from "react";
import { connect } from "react-redux";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { Close, DoneAll } from "@material-ui/icons";

//IMPORT PROJECT MODULE
import { markAllCompleted, radioAction, markAllIncompleted } from "../state/actionCreators";

class TodoControls extends Component
{
    state = {
        action: "",
    }

    onChangeHandler = (e) =>
    {
        let type = e.target.value;
        this.setState({ ...this.state, action: type });
        this.props.listAction(type);
    }
    render()
    {
        return (
            (this.props.todoList.length ?
                <div className="todo-controls">
                    <p>{this.props.todoList.filter((item) => !item.isCompleted).length} items left</p>
                    <RadioGroup aria-label="action" name="action" value={this.state.action} onChange={this.onChangeHandler} row>
                        <FormControlLabel
                            value="ALL"
                            control={<Radio color="primary" />}
                            label="All"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="ACTIVE"
                            control={<Radio color="primary" />}
                            label="Active"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="COMPLETED"
                            control={<Radio color="primary" />}
                            label="Completed"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                    <div className='todo-controls__actions'>
                        <DoneAll
                            onClick={() => { this.props.markCompleted(this.state.action) }}
                            className='icon-success c-pointer todo-controls__icon'
                        />
                        <Close
                            onClick={() => { this.props.markIncompleted(this.state.action) }}
                            className='icon-danger c-pointer todo-controls__icon'
                        />
                    </div>
                </div> : null)
        );
    };

    componentDidMount()
    {
        this.setState({ ...this.state, action: "ALL" });
        this.props.listAction("ALL");
    }
}
const mapStateToProps = (state) =>
{
    return { todoList: state.todo.todoList }
};

const mapDispatchToProps = (dispatch) => ({
    listAction: (type) =>
    {
        dispatch(radioAction(type));
    },
    markCompleted: (action) =>
    {
        dispatch(markAllCompleted(action));
    },
    markIncompleted: (action) =>
    {
        dispatch(markAllIncompleted(action));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoControls);