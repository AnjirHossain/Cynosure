import React, { Component } from 'react';
import { connect } from "react-redux";
import { taskActions } from '../../state/reducers/tasks';
import { uisTaskFormContainerActions } from "../../state/reducers/uisTaskFormContainer";
import {
  getFormattedCurrentDate,
  getCurrentTime,
  getCurrentDate,
  stringifyFormData
} from "../../utils";

import TaskForm from './TaskForm';

const mapStateToProps = state => ({
  formMode: state.uisTaskFormContainer.get("contentKey")
});
const mapDispatchToProps = dispatch => ({
	addTask: meta => dispatch(taskActions.addTask(meta)),
	setFormContent: contentKey => {
		if (contentKey === "TASK_FORM") {
      dispatch(uisTaskFormContainerActions.showTasksForm());
		} else {
      dispatch(uisTaskFormContainerActions.showDefault());
		}
	}
});

class TaskFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeadlineSetter: false,
      showAddDetails: false,
      defaultDateValue: getCurrentDate(),
      defaultTimeValue: getCurrentTime(),
      chosenDate: null,
      chosenTime: null
    };
    this.handleAddNewTask = this.handleAddNewTask.bind(this)
  }

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

    // extract all current form fields
    const data = new FormData(event.target);
    // append deadline fields from state
    data.append('deadline', state.chosenDate + '|' + state.chosenTime);

    // toggle default view
    props.setFormContent("DEFAULT");
    // dispatch add task action with the data
    props.addTask( stringifyFormData(data) );
  }
  // deadline date function
  onDateChange(date, dateString) {
    this.setState({ chosenDate: dateString });
  }
  // deadline time function
  onTimeChange(time, timeString) {
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