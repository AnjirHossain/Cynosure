import React, { Component } from 'react';
import { connect } from "react-redux";
import { taskActions } from '../../state/reducers/tasks';
import { addTaskCMActions } from "../../state/reducers/addTasksCM";
import { getFormattedCurrentDate, getCurrentTime, getCurrentDate, stringifyFormData } from '../../utils'

import TaskForm from './TaskForm';

const mapStateToProps = state => ({
  formMode: state.uisAddTaskContent.get("contentKey")
});
const mapDispatchToProps = dispatch => {
    return {
        addTask: meta => dispatch(taskActions.addTask(meta)),
        setFormContent: contentKey => {
            if (contentKey === "TASK_FORM") {
                dispatch(addTaskCMActions.showTasksForm());
            } else {
                dispatch(addTaskCMActions.showDefault());
            }
        }
    };
};

class TaskFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleAddNewTask = this.handleAddNewTask.bind(this)
  }
  state = {
    showDeadlineSetter: false,
    showAddDetails: false,
    defaultDateValue: getCurrentDate(),
    defaultTimeValue: getCurrentTime(),
    chosenDate: null,
    chosenTime: null
  };
  toggleDeadlineSetter() {
    this.setState({ showDeadlineSetter: !this.state.showDeadlineSetter });
  }
  toggleAddDetails() {
    this.setState({ showAddDetails: !this.state.showAddDetails });
  }
  handleAddNewTask(event) {
    // prevent default behavior
    event.preventDefault();
    let { props, state } = this;

    const data = new FormData(event.target);
    // append date fields
      data.append('deadline', state.chosenDate + '|' + state.chosenTime);

    /**
     * - get new task data from form input
     *   - merge deadline data and form data
     * - call add task code with data
     * - call show default code
     */

    props.setFormContent("DEFAULT");
    props.addTask( stringifyFormData(data) );
  }
  // deadline date function
  onDateChange(date, dateString) {
    /**
     * - format the date
     * - update the state to the new date
     */
    this.setState({ chosenDate: dateString });
  }
  // deadline time function
  onTimeChange(time, timeString) {
    /**
     * - format the time
     * - update the state to the new time
     */
    this.setState({ chosenTime: timeString });
  }
  render() {
    let { props, state } = this;

    let taskFormProps = {
      ...state,
      ...props,
      toggleDeadlineSetter: this.toggleDeadlineSetter.bind(this),
      toggleAddDetails: this.toggleAddDetails.bind(this),
      onDateChange: this.onDateChange.bind(this),
      onTimeChange: this.onTimeChange.bind(this),
      onSubmit: this.handleAddNewTask.bind(this)
    };

    return <TaskForm {...taskFormProps} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);