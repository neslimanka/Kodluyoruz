import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

class CartSummary extends Component {
  renderEmpty() {
    //-->sepet boş iken durum
    return (
      <NavItem>
        <NavLink>Sepetiniz boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.title}
              <Badge color="warning">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Go to Cart</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

//statetleri prop a aktarmam lazım
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
//action a bağlanmam laızm
function mapDispatchToProps(dispatch){
    return {
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
