import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navi from "./Navi";
import Footer from "./Footer";
import Section from "./Section";
import alertify from "alertifyjs";
import Navi1 from "./Navi1";
export default class HomePage extends Component {
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
      addedItem.price=addedItem.price+addedItem.price;
      
      
    } else {
      newCart.push({ product: product, quantity: 1,price:product.price });
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

        <Router>
         <Navi1/>
         <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Section />
          <Footer />
        </Router>
      </div>
    );
  }
}
