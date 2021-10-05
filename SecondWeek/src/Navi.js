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
import CartSummary from "./CartSummary";
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
                  <Link to="deneme">Deneme</Link>
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
              
                <CartSummary
                  removeFromCart={this.props.removeFromCart}
                  cart={this.props.cart}
                  
                />
                
              </NavItem>
              <NavItem>
              <NavLink>
              <img src={CartIcon} alt="" width="20" height="15"/>
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </header>
    );
  }
}
