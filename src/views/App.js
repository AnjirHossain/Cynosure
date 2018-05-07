import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import styled from 'styled-components';
import Flex, { FlexItem } from "styled-flex-component";

import TaskFormContainer from './TaskForm/TaskFormContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }
  render() {
    let addTaskContent = <TaskFormContainer />;
    let settingsContent = <div>settings</div>;
    let taskListContent = <div>
      <h1>Tasklist</h1>
    </div>;
    let appContentContainer = <FlexItem flex alignCenter justifyCenter>
      {/*
              - add task
              - task list
              - motivation header
            */}
      {addTaskContent}

      {/* {taskListContent} */}
    </FlexItem>

    return <Flex center inline>
        {/*
            - app content container
            - will change contingent upon user action
          */}
        {appContentContainer}

        {/* <FlexItem>
          {settingsContent}
        </FlexItem> */}
      </Flex>;
  }
}

export default App;
