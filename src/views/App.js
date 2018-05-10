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

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }
  render() {
    let gamificationContent = <div>
      <h1>Gamification content</h1>
    </div>
    let addTaskContent = <TaskFormContainer />;
    let settingsContent = <div>settings</div>;
    let taskListContent = <TaskListConainer />;
    let appContentContainer = <div>
        {gamificationContent}
        {addTaskContent}
        {taskListContent}
      </div>;

    return <div middle="xs">
        {/* app content area */}
        {appContentContainer}
        {/* app settings area */}
      </div>;
  }
}

export default App;
