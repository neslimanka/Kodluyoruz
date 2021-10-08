import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs"

class CartDetail extends Component {
 removeFromCart(product){
     this.props.actions.removeFromCart(product);
     alertify.error(product.title + "sepetten silindi!")
     
 }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.id}>
                <th scope="row">{cartItem.id}</th>
                <td>{cartItem.product.title}</td>
                <td>{cartItem.product.price}</td>
                <td>{cartItem.product.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
