import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./css/navi.css";
import CartIcon from "./img/shopping-cart-solid.svg";


export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <header>
      <div >
        <Navbar color="white" light expand="lg">
          <NavbarBrand href="/">Ecommerce</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="shop">Shop</Link>
                </NavLink>
              </NavItem>
           
              <NavItem>
                <NavLink>
                  <Link to="stories">Stories</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="about">About</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form2">Login</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="check">Check</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              <span>{this.props.cart.length}</span>
            <Link to="/cart">
              <img src={CartIcon} alt="" width="20" />
            </Link>
                
              </NavItem>
           
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </header>
    );
  }
}
