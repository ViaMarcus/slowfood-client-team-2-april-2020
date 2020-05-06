import React, { Component } from 'react'
import { Menu, ButtonGroup, Divider, Button, Header } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu
          as="menu"
          // fixed="top"
          inverted
          color="black"
        >
          <Header inverted style={{ "font-family": "Allura", "font-size":"72px", "padding-bottom":"5px"}}>InstaFood</Header>
          <Menu.Menu position="right">
            <ButtonGroup color="black">
            <Button
              id="about"
              onClick={() => alert('About')}
              size="big"
            >
              About us
            </Button>
            <Button
              id="menu"
              onClick={() => alert('Menu')}
              size="big"
            >
              Menu
            </Button>
            <Button
              size="big"
              id="Checkout"
              onClick={() => alert('Checkout')}
            >
              Checkout
            </Button>
            <Button.Group
              height="66px"
              vertical
              secondary
            >
            <Button
              style={{ "height": "45px", "width": "90px"}}
              id="signup"
              onClick={() => this.props.onClick("signup")}
            >
              Sign up
            </Button>
            <Divider
              fitted
            ></Divider>
            <Button
              style={{ "height": "45px", "width": "90px"}}
              onClick={() => this.props.onClick("login")}
              id="login"
            >
              Login
            </Button>
            </Button.Group>
            </ButtonGroup>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
