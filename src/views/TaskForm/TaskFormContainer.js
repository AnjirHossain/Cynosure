import React, { Component } from 'react';
import { connect } from "react-redux";
import { taskActions } from '../../state/reducers/tasks';
import { addTaskCMActions } from "../../state/reducers/addTasksCM";

import TaskForm from './TaskForm';

const mapStateToProps = state => ({
  formMode: state.uisAddTaskContent.get("contentKey")
});
const mapDispatchToProps = dispatch => ({
  addTask: meta => dispatch(taskActions.addTask(meta)),
  setFormContent: contentKey => {
    if (contentKey === "TASK_FORM") {
        dispatch(addTaskCMActions.showTasksForm());
    } else {
        dispatch(addTaskCMActions.showDefault());
    }
  }
});

class TaskFormContainer extends Component {
    render() {
        let { props, state } = this;

        let taskFormProps = {
            ...props
        };

        return <TaskForm {...taskFormProps} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);