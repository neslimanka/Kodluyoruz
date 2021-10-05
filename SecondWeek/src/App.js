import React, { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";

import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
import Home from "./Home";

export default class App extends Component {
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
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
         
          <Row>
            <Col xs="2">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
           
            </Col>
            <Col xs="5">
                
              <Switch>
                <Route
                  
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                 <Route
                  exact
                  path="/cartList"
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                      addToCart={this.addToCart}
                    />
                  )}
                />
                <Route exact path="/form1" component={FormDemo1}></Route>
                <Route exact path="/form2" component={FormDemo2} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Col>
            <Col xs="4">
            <CartList 
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
