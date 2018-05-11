import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import styled from 'styled-components';
import Flex, { FlexItem } from "styled-flex-component";
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import TaskFormContainer from './TaskForm/TaskFormContainer';
import TaskListConainer from './Tasklist/TaskListContainer'

// hardcoded style objects
let appContentContainerDesktopStyles = {
  display: 'flex',
  flexFlow: 'column',
  flexBasis: '75vw',
  backgroundColor: 'yellow',
  overflow: 'hidden'
};

let taskFormContentStyle = {
  default: {
    transition: ".25s all",
    backgroundColor: "green",
    display: "flex",
    height: "10%",
    flexDirection: "column",
    justifyContent: "center"
  },
  expanded: {
    height: "100%",
    justifyContent: "flex-start",
    zIndex: 200
  },
  collapsed: {
    height: "10%",
    zIndex: 100
  }
};

let incouragementContentStyle = {
  default: {
    transition: ".25s all",
    height: "25%",
    zIndex: 100
  },
  /**
   * A state where this content will be taken out of view
   * by another component
   */
  tucked: {
    height: "0",
    zIndex: 0
  }
};

let tasklistContentStyle = {
  defualt: {
    transition: ".25s all",
    zIndex: 100
  },
  tucked: {
    height: "0",
    zIndex: 0
  },
  expanded: {
    height: "100%",
    justifyContent: "flex-start",
    zIndex: 200
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskFormExpanded: false,
      incouragementShown: true,
      tasklistShown: true
    };
  }

  // main app animation triggers
  toggleTaskFormMode(e) {
    let {
      incouragementShown,
      tasklistShown,
      taskFormExpanded
    } = this.state;

    /**
     * - fade incouragement container
     * - fade tasklist container
     * - animate task form content
     */
    this.setState({
      taskFormExpanded: !taskFormExpanded,
      incouragementShown: !incouragementShown,
      tasklistShown: !tasklistShown
    });
  }

  render() {
    let { state } = this;
    let { taskFormExpanded, incouragementShown, tasklistShown } = state;

    // stores incouragement (progress)
    let incouragementContent = <header style={
      Object.assign(
        {},
        incouragementContentStyle.default,
        incouragementShown ? incouragementContentStyle.expanded : incouragementContentStyle.tucked
      )}>
        <h1 style={{ fontSize: "72px" }}>Incouragement content</h1>
      </header>;

    // ui state/animation parameters for addTaskContent

    let addTaskContent = <TaskFormContainer toggleTaskFormMode={this.toggleTaskFormMode.bind(this)} style={Object.assign({}, taskFormContentStyle.default, taskFormExpanded ? taskFormContentStyle.expanded : taskFormContentStyle.collapsed)} />;

    let settingsContent = <section>settings</section>;
    let taskListContent = <TaskListConainer style={
      Object.assign(
        {},
        tasklistContentStyle.default,
        !tasklistShown ? tasklistContentStyle.tucked : null
      )}/>;

    let appContentContainer = (
      <section style={appContentContainerDesktopStyles}>
        {/* incouragement header */}
        {incouragementContent}
        {/* add tasks form div */}
        {addTaskContent}
        {/* tasklist section */}
        {taskListContent}
      </section>
    );

    let settingsContentContainer = (
      <section
        style={{
          display: "flex",
          flexBasis: "25vw",
          backgroundColor: "lightblue"
        }}
      >
        {settingsContent}
      </section>
    );

    return (
      <section
        style={{
          display: "flex",
          // aligns immediate children
          justifyContent: "flex-end",
          alignItems: "stretch",
          // made the wrapping container full width & height
          height: "100vh",
          width: "100vw",
          // overall padding
          padding: "0 10em"
        }}
      >
        {/* app content section */}
        {appContentContainer}
        {/* app settings section */}
        {settingsContentContainer}
      </section>
    );
  }
}

export default App;
