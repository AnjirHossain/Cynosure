import React, { Component } from "react";
import { connect } from "react-redux";
import { uisTaskListContainerActions } from "../../state/reducers/uisTaskListContainer";
import TaskList from './TaskList';
import TaskListNavigator from "./TaskListNavigator";
// destructering for readability
let { setCurrentSelectedList, expandTask } = uisTaskListContainerActions;

const mapStateToProps = state => ({
  currentSelectedListId: state.uisTaskListContainer.get(
    "currentSelectedListId"
  ),
  expandedTask: state.uisTaskListContainer.get("expandedTask"),
  tasks: state.tasks.get(
    state.uisTaskListContainer.get("currentSelectedListId")
  )
});

const mapDispatchToProps = dispatch => ({
  setCurrentSelectedList: currentSelectedListId =>
    dispatch(setCurrentSelectedList(currentSelectedListId)),
  expandTask: meta => dispatch(expandTask(meta))
});

class TaskListContainer extends Component {
	render() {
    let { props } = this;

    let taskListProps = {
      tasks: props.tasks,
      expandedTask: props.expandedTask,
      expandTask: props.expandTask
    };
    let taskListNavigatorProps = { setCurrentSelectedList: props.setCurrentSelectedList, currentSelectedListId: props.currentSelectedListId };

    return <section style={props.style}>
        <TaskListNavigator {...taskListNavigatorProps} />
        <TaskList {...taskListProps} />
      </section>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);