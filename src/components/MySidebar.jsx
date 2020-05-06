import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar, Form, Label, Header, Divider} from 'semantic-ui-react'
import NavBar from "./NavBar"

class MySidebar extends Component {
  state= {
    visible: true
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          // onHide={() => this.setState({visible: true})}
          vertical
          direction="right"
          visible={this.props.form != "none"}
          width='wide'
        >
          <Menu.Item as='a'>
            <Header inverted>Login</Header>
            <Form id="login-form" onSubmit={this.props.submitFormHandler}>
              <Label inverted>Email</Label>
              <input name="email" type="email" id="email"></input>
              <Label inverted>Password</Label>
              <input name="password" type="password" id="password"></input>
              <button id="submit">Submit</button>
            </Form>
          </Menu.Item>
          <Divider horizontal inverted>or</Divider>
          <Menu.Item as='a'>
          <Header inverted>Register</Header>
            <Form id="login-form" onSubmit={this.props.submitFormHandler}>
              <Label inverted>Email</Label>
              <input name="email" type="email" id="email"></input>
              <Label inverted>Password</Label>
              <input name="password" type="password" id="password"></input>
              <button id="submit">Submit</button>
            </Form>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
        <div style={{"height":"90vh"}}></div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default MySidebar;
