import React, { Component } from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import Container from "@material-ui/core/Container";
import { Row, Col } from "react-bootstrap";
import './css/Products.css';
import {  Card, Button } from "reactstrap";
import Grid from "@material-ui/core/Grid";


export class Products extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

 

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
                      width: "20rem",
                      height: "25rem",
                      
                    }}
                  >
                    
                    <Grid item xs={12} sm={3}>
                          <div className="card" key={product.id}>
                          <Link to={`/product/${product.id}`}>
                              <img src={product.image} alt="" />
                            </Link>
                            
                          </div>
                        </Grid>
                       
                    
                    <Button onClick={() => this.addToCart(product)}>
                      Add to Cart
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