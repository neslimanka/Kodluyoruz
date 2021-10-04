import React, { Component } from 'react'
import { Container } from 'reactstrap';
import Navi from "./Navi";
import alertify from "alertifyjs";

export default class About extends Component {
    state = { products: [], cart: [] };


  
    removeFromCart = (product) => {
      let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
      this.setState({ cart: newCart });
      alertify.error(product.title + " removed from cart!");
    };
    render() {
        return (
            <div>
                <Container>
                <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
                <br/>
                <h1>This is About Component</h1>
                </Container>
            </div>
        )
    }
}
