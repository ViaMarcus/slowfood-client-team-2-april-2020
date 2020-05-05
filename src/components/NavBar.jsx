import React, { Component } from 'react'
import { Menu, ButtonGroup, Divider, Button } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu
          as="menu"
          fixed="top"
          inverted
        >
          <Menu.Menu
            position="right">
            <Button
              id="about"
              onClick={() => alert('About')}
            >
              About us
            </Button>
            <Button
              id="menu"
              onClick={() => alert('Menu')}
            >
              Menu
            </Button>
            <Button
              id="Checkout"
              onClick={() => alert('Checkout')}
            >
              Checkout
            </Button>
            <Button
              id="signup"
              onClick={() => alert('Signup')}
            >
              Sign up
            </Button>
            <Divider horizontal></Divider>
            <Button
              id="login"
              onClick={() => alert('Login')}
            >
              Login
            </Button>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
