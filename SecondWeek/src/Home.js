import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Container, Row} from "reactstrap";

import Header from "./Header";
import Navi from "./Navi";
import Slider from "./Slider";
import alertify from "alertifyjs";
export default class Home extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  
  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.title + " added to cart!");
  };

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
          <Row>
            <Header />
            <Slider />
            <Switch>
      
            </Switch>
          </Row>
        </Container>
      </div>
    );
  }
}
