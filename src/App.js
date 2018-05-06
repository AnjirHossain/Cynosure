import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Row, Col, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor() {
    super();

    this.state = { text: "" };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}
  render() {
    return <div className="AppContainer">
        <Layout>
          <Layout>
            <Header style={{ background: "#fff", fontSize: 50, height: 200 }}>
              {/*
                  - My Tasks
                  - Add new task cta
              */}
            </Header>
            <Content style={{ background: "#fff" }}>
              {/*
                  - First task expanded and emphasized
                  - Remaining taskslist
              */}
            </Content>
            {/* A footer can be placed here if necessary */}
          </Layout>
          {/* Side bar */}
          <Sider width={300} style={{ background: "#fff" }}>
            <Header style={{ background: "#fff" }}>
              {/*
                - Date
                - (Completion ratio)? from the day before
              */}
            </Header>
            <Footer style={{ background: "#fff" }}>
              {/*
                - Settings
               */}
            </Footer>
          </Sider>
        </Layout>
      </div>;
  }
}

export default App;
