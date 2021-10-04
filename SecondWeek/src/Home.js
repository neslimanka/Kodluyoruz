import React, { Component } from "react";

import { Container } from "reactstrap";
import Navi from "./Navi";
import alertify from "alertifyjs";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "./Slider";

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

          <br />

          <div class="container-fluid">
            <Jumbotron>
              <h1 className="display-3">Better clothing for the planet</h1>
              <p className="lead">
                Create screens directly in Method or add your images from Sketch
                or{" "}
              </p>

              <p>Figma.You can even sync designs from your cloud storage!</p>
              <p className="lead">
                <Button color="warning">
                  <Link to="/shop"> Shop All</Link>
                </Button>
              </p>
            </Jumbotron>
          </div>
          <div>
            <Slider></Slider>
          </div>
       

        </Container>
      </div>
    );
  }
}
