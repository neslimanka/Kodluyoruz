import React, { Component } from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import Container from "@material-ui/core/Container";
import { Row, Col } from "react-bootstrap";
import './css/Products.css';

import { CardBody, CardTitle, CardImg, Card, Button } from "reactstrap";

export class Products extends Component {
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
      addedItem.price = addedItem.price + addedItem.price;
    } else {
      newCart.push({ product: product, quantity: 1, price: product.price });
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
       
        <Container maxWidth="lg" style={{ marginTop: "8px" }}>
          <Row>
            
            {this.state.products.map((product) => {
              return (
                <Col key={product.id} md="3">
                  <Card
                    top
                    style={{
                      width: "15rem",
                      height: "34rem",
                      borderColor: "#7494fb",
                    }}
                  >
                    <CardBody>
                      <CardImg
                        width="50%"
                        height="35%"
                        src={product.image}
                        alt="Card image cap"
                      />
                      <CardTitle tag="h5">{product.title}</CardTitle>
                    </CardBody>
                    <Button onClick={() => this.addToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button color="warning">
                      <Link to="Stories">Details</Link>
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;
