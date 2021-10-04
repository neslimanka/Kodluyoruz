import React, { Component } from "react";
import { Button, Table, CardBody, CardTitle, CardImg } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <div>
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>
                  <CardBody>
                    <CardImg
                      width="20%"
                      height="15%"
                      src={cartItem.product.image}
                      alt="Card image cap"
                    />
                    <CardTitle tag="h5">{cartItem.product.title}</CardTitle>
                  </CardBody>
                </td>

                <td>{cartItem.price} TL</td>
                <td>{cartItem.quantity}</td>

                <td>
                  <Button
                    color="danger"
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                  >
                    Remove
                  </Button>
                </td>
               <td>{cartItem.totalPrice}</td>
              </tr>
              
            ))}
          </tbody>
          
        
          
        </Table>
      </div>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
